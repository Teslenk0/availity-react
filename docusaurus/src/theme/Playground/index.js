/* eslint-disable react/prop-types */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import classnames from 'classnames';

import styles from './styles.module.css';

function Playground({ code, theme, transformCode, ...props }) {
  return (
    <LiveProvider
      code={code}
      transformCode={transformCode || (code => `${code};`)}
      theme={theme}
      {...props}
    >
      <div
        className={classnames(
          styles.playgroundHeader,
          styles.playgroundEditorHeader
        )}
      >
        Live Editor
      </div>
      <LiveEditor />
      <div
        className={classnames(
          styles.playgroundHeader,
          styles.playgroundPreviewHeader
        )}
      >
        Result
      </div>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
    </LiveProvider>
  );
}

export default Playground;
