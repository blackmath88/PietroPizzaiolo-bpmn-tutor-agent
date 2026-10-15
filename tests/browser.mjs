import {chromium} from 'playwright';
import {once} from 'node:events';
import {mkdir,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import assert from 'node:assert/strict';
import {createApp} from '../server/index.js';
const server=createApp({apiKey:'',accessToken:''});server.listen(0,'127.0.0.1');await once(server,'listening');
const temp=await mkdtemp(join(tmpdir(),'pietro-'));let browser;
try{
 browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:'+server.address().port+'/unibas/');await mkdir('test-results',{recursive:true});await page.screenshot({path:'test-results/desktop.png'});
 await page.click('#demoBtn');await page.locator('#mapContainer svg').waitFor();assert.ok(await page.locator('#mapContainer svg path').count()>5);
 await page.click('[data-tab="capture"]');await page.fill('#title','Workshop Test');await page.click('[data-tab="export"]');const [download]=await Promise.all([page.waitForEvent('download'),page.click('#exportJson')]);const file=join(temp,'process.json');await download.saveAs(file);
 await page.click('#saveLocal');await page.reload();assert.equal(await page.inputValue('#title'),'Workshop Test');await page.click('[data-tab="export"]');await page.setInputFiles('#importFile',file);await page.locator('#capture').waitFor({state:'visible'});assert.equal(await page.inputValue('#title'),'Workshop Test');
 await page.click('[data-tab="learn"]');await page.click('[data-answer="1"]');assert.match(await page.textContent('#lessonFeedback'),/Genau/);
 await page.click('#settingsBtn');await page.fill('#backend','https://example.org/api/chat');await page.click('#applySettings');await page.click('[data-tab="export"]');await page.click('summary:has-text("Mistral-Gesprächspartner")');await page.route('https://example.org/api/chat',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify({reply:'Welche Rolle prüft?'})}));await page.fill('#chatInput','Was fehlt?');await page.click('#sendChat');await page.locator('.message.assistant').waitFor();
 await page.setViewportSize({width:390,height:844});await page.click('[data-tab="capture"]');await page.screenshot({path:'test-results/mobile.png'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.deepEqual(errors,[]);
 console.log('PASS: example graph, editing, save/reload, export/import, lesson, mocked chat, mobile overflow, no JS errors.');
}finally{await browser?.close();server.closeAllConnections();await new Promise(r=>server.close(r));await rm(temp,{recursive:true,force:true});}
