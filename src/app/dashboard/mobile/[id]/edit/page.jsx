import { CONFIG } from 'src/config-global';

import { EditMobileView } from 'src/sections/overview/mobile/view/mobile-edit-view';

export const metadata = {
  title: `Edit Product | Dashboard - ${CONFIG.site.name}`,
};

export default function Page({ params }) {
  const { id } = params;

  return <EditMobileView id={id} />;
}
