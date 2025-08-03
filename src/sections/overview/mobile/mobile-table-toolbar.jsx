import { useCallback } from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useSetState } from 'src/hooks/use-set-state';

import { varAlpha } from 'src/theme/styles';

import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function MobileTableToolbar({ filters, options }) {
  const popover = usePopover();

  const local = useSetState({
    stock: filters.state.stock,
    publish: filters.state.publish,
  });

  const handleChangeStock = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;

      local.setState({ stock: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleChangePublish = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;

      local.setState({ publish: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleFilterStock = useCallback(() => {
    filters.setState({ stock: local.state.stock });
  }, [filters, local.state.stock]);

  const handleFilterPublish = useCallback(() => {
    filters.setState({ publish: local.state.publish });
  }, [filters, local.state.publish]);

  return (
    <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
      <InputLabel htmlFor="product-filter-stock-select-label">موجودی</InputLabel>

      <Select
        multiple
        value={local.state.stock}
        onChange={handleChangeStock}
        onClose={handleFilterStock}
        input={<OutlinedInput label="Stock" />}
        renderValue={(selected) => selected.map((value) => value).join(', ')}
        inputProps={{ id: 'product-filter-stock-select-label' }}
        sx={{ textTransform: 'capitalize' }}
      >
        {options.stocks.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox
              disableRipple
              size="small"
              checked={local.state.stock.includes(option.value)}
            />
            {option.label}
          </MenuItem>
        ))}
        <MenuItem
          onClick={handleFilterStock}
          sx={{
            justifyContent: 'center',
            fontWeight: (theme) => theme.typography.button,
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
          }}
        >
          ثبت
        </MenuItem>
      </Select>
    </FormControl>
  );
}
