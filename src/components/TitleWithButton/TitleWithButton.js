import React from 'react';
import { Tooltip } from 'antd';
import './style.less';
import { Button } from '../Button';
import { QuestionIcon } from '../IconsCollection';


export function TitleWithButton({
  title, buttonIcon = <QuestionIcon />, onClickButton, className, style
}) {
  const classes = [className, 'title-with-button'];

  return (
    <div
      className={classes.join(' ')}
      style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: 20, ...style
      }}
    >
      <div className="font16-24-semi-bold">
        {title}
      </div>
      <Tooltip trigger="click" placement="left" title={title}>
        <Button
          onClick={onClickButton ?? null}
          style={{ fontSize: 12, color: 'white' }}
          type="primary"
          icon={buttonIcon}
        />
      </Tooltip>

    </div>
  );
}
