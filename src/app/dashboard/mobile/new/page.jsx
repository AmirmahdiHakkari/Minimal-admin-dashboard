import { CONFIG } from 'src/config-global';

import { MobileCreateView } from 'src/sections/overview/mobile/view/product-create-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new product | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <MobileCreateView />;
}
