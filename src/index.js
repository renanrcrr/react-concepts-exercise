import React from 'react';
import { createRoot } from 'react-dom/client';
import Father from './components/Father';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <div>
        <Father name="Geronimo" surname="Fonseca" />
    </div>
);


