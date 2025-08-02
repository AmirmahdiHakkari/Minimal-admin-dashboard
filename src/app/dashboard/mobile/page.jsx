import { CONFIG } from 'src/config-global';

import { OverviewMobileView } from 'src/sections/overview/mobile/view/overview-mobile-view';

export const metadata = { title: `Analytics | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <OverviewMobileView />;
}
