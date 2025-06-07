import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { themeActions } from '../stores/theme/theme.slice.js';

export const APPLICATION_ACTIONS = {
  ...themeActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(APPLICATION_ACTIONS, dispatch);
};
