'use client';

import React, { FC } from 'react';
import { CloseOutlined, SearchIcon } from '@my-workspace/icons';
import { IconButton, InputAdornment, TextField } from '@my-workspace/ui-shared';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '../../../../utils/create-query-string';

const FormSchema = z.object({
  search: z.string(),
});

const FormSearch: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    router.push(
      `${pathname}?${createQueryString('name', data.search, searchParams)}`
    );
  });

  const clearForm = () => {
    form.setValue('search', '');
    router.push(`${pathname}?${createQueryString('name', '', searchParams)}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <Controller
        name="search"
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            size="small"
            placeholder="맛집 이름을 검색해보세요"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={clearForm}>
                    <CloseOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </form>
  );
};

export default FormSearch;
