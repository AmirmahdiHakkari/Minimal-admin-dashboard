'use client';

import { notFound } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { PRODUCT_PUBLISH_OPTIONS } from 'src/_mock';
import { productList } from 'src/_mock/mobile/_mobile';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { MobileDetailsSummary } from '../mobile-details-summary';
import { MobileDetailsToolbar } from '../moobile-details-toolbar';
import { MobileDetailsCarousel } from '../mobile-details-carousel';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: '100% اصل',
    description: 'حلوای شکلات تخته‌ای، آبنبات عصایی، بستنی، تافی و کوکی.',
    icon: 'solar:verified-check-bold',
  },
  {
    title: '۱۰ روز مهلت تعویض',
    description: 'ویفر کیک میوه ای با بیسکویت مارشملو دونات دراژه.',
    icon: 'solar:clock-circle-bold',
  },
  {
    title: 'سال گارانتی',
    description: 'کیک زنجبیلی با پشمک من عاشق شیرینی شکری هستم.',
    icon: 'solar:shield-check-bold',
  },
];

// ----------------------------------------------------------------------

export function MobileDetailsView({ id }) {
  const product = productList.find((item) => item.id.toString() === id);

  const tabs = useTabs('description');

  const [publish, setPublish] = useState('');

  useEffect(() => {
    if (product) {
      setPublish(product?.publish || '');
    }
  }, [product]);

  const handleChangePublish = useCallback((newValue) => {
    setPublish(newValue);
  }, []);

  if (!product) {
    return notFound();
  }

  return (
    <DashboardContent>
      <MobileDetailsToolbar
        backLink={paths.dashboard.mobile.root}
        editLink={paths.dashboard.mobile.edit(product.id)}
        publish={publish}
        onChangePublish={handleChangePublish}
        publishOptions={PRODUCT_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <MobileDetailsCarousel images={product?.images ?? []} />
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          {product && <MobileDetailsSummary disableActions product={product} />}
        </Grid>
      </Grid>

      <Box
        gap={5}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        sx={{ my: 10 }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: 'center', px: 5 }}>
            <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </DashboardContent>
  );
}
