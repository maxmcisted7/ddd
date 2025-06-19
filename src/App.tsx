import React from 'react';
import ComponentsGallery from './components/ComponentsGallery';
import IconsGallery from './components/IconsGallery';
import TokensGallery from './components/TokensGallery';

const App = () => (
  <div style={{ fontFamily: 'Inter, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
    <header style={{ padding: '2rem 2rem 1rem', borderBottom: '1px solid #e0e0e0', background: '#fff', marginBottom: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Oxide Design Library</h1>
      <p style={{ color: '#666', margin: 0 }}>A visual catalog of all design system components, icons, and tokens</p>
    </header>
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
      <ComponentsGallery />
      <hr style={{ margin: '48px 0' }} />
      <IconsGallery />
      <hr style={{ margin: '48px 0' }} />
      <TokensGallery />
    </main>
  </div>
);

export default App; 