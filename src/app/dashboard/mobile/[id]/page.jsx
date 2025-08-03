import { CONFIG } from 'src/config-global';

import { MobileDetailsView } from 'src/sections/overview/mobile/view/mobile-details-view';

export const metadata = { title: `Analytics | Dashboard - ${CONFIG.site.name}` };

export default function Page({ params }) {
  const { id } = params;

  return <MobileDetailsView id={id} />;
}
