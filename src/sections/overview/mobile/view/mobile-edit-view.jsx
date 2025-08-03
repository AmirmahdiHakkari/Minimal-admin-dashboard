'use client';

import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { productList } from 'src/_mock/mobile/_mobile';
import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MobileNewEditForm } from '../mobile-new-edit-form';

// ----------------------------------------------------------------------

export function EditMobileView({ id }) {
  const product = useMemo(() => productList.find((prod) => String(prod.id) === String(id)), [id]);

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="ویرایش"
        links={[
          { name: 'داشبرد', href: paths.dashboard.root },
          { name: 'گوشی ها', href: paths.dashboard.mobile.root },
          { name: product?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <MobileNewEditForm currentProduct={product} />
    </DashboardContent>
  );
}
