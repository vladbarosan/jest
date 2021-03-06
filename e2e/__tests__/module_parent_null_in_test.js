/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

import runJest from '../runJest';

test('module.parent should be null in test files', () => {
  const {status} = runJest('module_parent_null_in_test');

  expect(status).toBe(0);
});
