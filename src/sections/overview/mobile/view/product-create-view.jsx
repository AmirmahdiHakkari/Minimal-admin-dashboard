'use client';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MobileNewEditForm } from '../mobile-new-edit-form';

// ----------------------------------------------------------------------

export function MobileCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new product"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Mobile', href: paths.dashboard.mobile.root },
          { name: 'New product' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <MobileNewEditForm />
    </DashboardContent>
  );
}
