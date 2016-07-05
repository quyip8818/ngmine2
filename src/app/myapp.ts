/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Yongsheng Li
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {ConfigComponent} from './config_component/config.component';
import {MineComponent} from './mine_component/mine.entry';
import {UserComponent} from "./user_component/user.entry";
import {LocalService} from './service/local_service';
import {RemoteService} from "./service/remote_service";

@Component({
    selector: 'myapp',
    templateUrl: 'app/myapp.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
      require('normalize.css'),
      require('./myapp.css')
    ],
    directives: [ConfigComponent, MineComponent, UserComponent],
    providers: [LocalService, RemoteService]
})
export class MyApp {
    constructor() {}
}
