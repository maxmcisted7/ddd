import React from 'react';
import * as Icons from '../../icons/react';

export default function IconsGallery() {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Icons</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 24 }}>
        {Object.entries(Icons).map(([name, Icon]) => (
          <div key={name} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 16, textAlign: 'center' }}>
            <Icon />
            <div style={{ fontSize: 12, color: '#666', marginTop: 8 }}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 