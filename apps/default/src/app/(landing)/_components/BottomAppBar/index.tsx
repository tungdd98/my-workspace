import React, { FC } from 'react';
import {
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  MessageIcon,
  SearchIcon,
} from '@my-workspace/icons';
import { AppBar, IconButton, Toolbar } from '@my-workspace/ui-shared';

const BottomAppBar: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: 0,
        bgcolor: 'white',
        color: 'grey.700',
        py: 1,
        px: 4,
      }}
    >
      <Toolbar className="justify-between">
        <IconButton color="inherit" className="flex flex-col gap-1">
          <HomeIcon className="w-6 h-6" />
          <span className="text-[10px]">홈</span>
        </IconButton>
        <IconButton color="error" className="flex flex-col gap-1">
          <SearchIcon className="w-6 h-6" />
          <span className="text-[10px]">검색</span>
        </IconButton>
        <IconButton color="inherit" className="flex flex-col gap-1">
          <MessageIcon className="w-6 h-6" />
          <span className="text-[10px]">피드</span>
        </IconButton>
        <IconButton color="inherit" className="flex flex-col gap-1">
          <CalendarIcon className="w-6 h-6" />
          <span className="text-[10px]">내 예약</span>
        </IconButton>
        <IconButton color="inherit" className="flex flex-col gap-1">
          <MenuIcon className="w-6 h-6" />
          <span className="text-[10px]">메뉴</span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
