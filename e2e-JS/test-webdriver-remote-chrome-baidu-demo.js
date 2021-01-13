// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/**
 * @fileoverview Example Mocha tests using async/await.
 *
 * Usage:
 *     ./node_modules/.bin/chromedriver --verbose --log-path=chromedriver.log
 * 
 *     mocha -t 20000 "d:\Workspace\electronTest\electron-quick-start\e2e-JS\test-webdriver-remote-chrome-baidu-demo.js"
 *
 * You can change which browser is started with the SELENIUM_BROWSER environment
 * variable:
 *
 *     SELENIUM_BROWSER=chrome \
 *         mocha -t 20000 --harmony_async_await \
 *         selenium-webdriver/example/async_await_test.js
 */

'use strict';

const assert = require('assert');
const {Builder, By, Key, promise, until} = require("selenium-webdriver/index");

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;

describe('Baidu Search', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer("http://localhost:9515").build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('example', async function() {
    await driver.get('https://www.baidu.com/');

    await driver.findElement(By.id('kw')).sendKeys('webdriver', Key.RETURN);

    await driver.wait(until.titleContains('webdriver'), 10000);

    let url = await driver.getCurrentUrl();
    assert.ok(
        url.startsWith('https://www.baidu.com/s'),
        'unexpected url: ' + url);
  });
});
