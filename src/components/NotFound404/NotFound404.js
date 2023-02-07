import React from 'react';
import { json, useRouteError } from 'react-router-dom';
import { Header } from '../Header';


export function NotFound404() {
  const error = useRouteError();

  return (
    <>
      <Header />

      <div style={{
        overflow: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      >
        <h2 className="not-found-title">Ошибка 404. Страница не найдена</h2>
        <pre>
          {error.statusText || error.message}

          {error.data}

          {error.statusText}

          {error.status}
        </pre>
      </div>
    </>

  );
}
