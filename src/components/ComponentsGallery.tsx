import React from 'react';
// Import components from your design system
import { Button } from '../../components/src/ui/button/Button';
import { Checkbox } from '../../components/src/ui/checkbox/Checkbox';
import { Badge } from '../../components/src/ui/badge/Badge';
import { Spinner } from '../../components/src/ui/spinner/Spinner';
import { Listbox } from '../../components/src/ui/listbox/Listbox';
import { Tabs } from '../../components/src/ui/tabs/Tabs';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 40 }}>
    <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>{children}</div>
  </section>
);

export default function ComponentsGallery() {
  return (
    <div>
      <Section title="Button">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 200 }}>
          <Button>Default</Button>
        </div>
      </Section>
      <Section title="Checkbox">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 200 }}>
          <Checkbox label="Checkbox" />
        </div>
      </Section>
      <Section title="Badge">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 200 }}>
          <Badge>Badge</Badge>
        </div>
      </Section>
      <Section title="Spinner">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 200 }}>
          <Spinner />
        </div>
      </Section>
      <Section title="Listbox">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 200 }}>
          <Listbox options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]} />
        </div>
      </Section>
      <Section title="Tabs">
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #0001', padding: 24, minWidth: 300 }}>
          <Tabs tabs={[{ label: 'Tab 1', value: '1' }, { label: 'Tab 2', value: '2' }]} />
        </div>
      </Section>
    </div>
  );
} 