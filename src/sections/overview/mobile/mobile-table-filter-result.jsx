import { useCallback } from 'react';

import Chip from '@mui/material/Chip';

import { sentenceCase } from 'src/utils/change-case';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

export function MobileTableFiltersResult({ filters, totalResults, sx }) {
  const handleRemoveStock = useCallback(
    (inputValue) => {
      const newValue = filters.state.stock.filter((item) => item !== inputValue);

      filters.setState({ stock: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="موجودی:" isShow={!!filters.state.stock.length}>
        {filters.state.stock.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveStock(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}
