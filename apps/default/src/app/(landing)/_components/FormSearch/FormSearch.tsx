'use client';

import React, { FC } from 'react';
import { CloseOutlined, SearchIcon } from '@my-workspace/icons';
import { IconButton, InputAdornment } from '@my-workspace/ui-shared';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@apps/default/utils/create-query-string';
import FormInputText from '@apps/default/components/FormElements/HookTextField';

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
      <FormInputText
        name="search"
        control={form.control}
        placeholder="맛집 이름을 검색해보세요"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: !!form.getValues().search && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={clearForm}>
                <CloseOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default FormSearch;
