import React from 'react';
import tokens from '../../styles/src/tokens.json';

const colorTokens = Object.entries(tokens).filter(([key, value]) => {
  if (typeof value === 'object' && value.type === 'color') return true;
  return false;
});

export default function TokensGallery() {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Color Tokens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {colorTokens.map(([name, token]: any) => (
          <div key={name} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 16, minWidth: 120, textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: token.value, margin: '0 auto 8px', border: '1px solid #eee' }} />
            <div style={{ fontSize: 12, color: '#666' }}>{name}</div>
            <div style={{ fontSize: 12, color: '#aaa' }}>{token.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 