/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import list from './list'
import scroller from './scroller'
import waterfall from './waterfall'
// import cell from './cell'
import header from './header'
import loading from './loading'
import refresh from './refresh'
import loadingIndicator from './loading-indicator'
import recycleList from './recycle-list'

import './style.css'

const modules = [
  list,
  scroller,
  waterfall,
  // cell,
  header,
  loading,
  refresh,
  loadingIndicator,
  recycleList
]

export default {
  init (weex) {
    modules.forEach(function (mod) {
      weex.install(mod)
    })
  }
}
