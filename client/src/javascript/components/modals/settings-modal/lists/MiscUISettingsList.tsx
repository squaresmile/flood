import {FC, useRef} from 'react';

import SettingStore from '@client/stores/SettingStore';
import ToggleList from '@client/components/general/ToggleList';

import type {FloodSettings} from '@shared/types/FloodSettings';

interface MiscUISettingsListProps {
  onSettingsChange: (changedSettings: Partial<FloodSettings>) => void;
}

const MiscUISettingsList: FC<MiscUISettingsListProps> = ({onSettingsChange}: MiscUISettingsListProps) => {
  const changedUIPageTitleSpeedEnabledRef = useRef<FloodSettings['UIPageTitleSpeedEnabled']>(
    SettingStore.floodSettings.UIPageTitleSpeedEnabled,
  );
  const changedUISidebarPrivateTrackersOnlyRef = useRef<FloodSettings['UISidebarPrivateTrackersOnly']>(
    SettingStore.floodSettings.UISidebarPrivateTrackersOnly,
  );

  return (
    <ToggleList
      items={[
        {
          label: 'settings.ui.page.title.speed',
          defaultChecked: changedUIPageTitleSpeedEnabledRef.current,
          onClick: () => {
            changedUIPageTitleSpeedEnabledRef.current = !changedUIPageTitleSpeedEnabledRef.current;
            onSettingsChange({UIPageTitleSpeedEnabled: changedUIPageTitleSpeedEnabledRef.current});
          },
        },
        {
          label: 'settings.ui.sidebar.private.trackers.only',
          defaultChecked: changedUISidebarPrivateTrackersOnlyRef.current,
          onClick: () => {
            changedUISidebarPrivateTrackersOnlyRef.current = !changedUISidebarPrivateTrackersOnlyRef.current;
            onSettingsChange({UISidebarPrivateTrackersOnly: changedUISidebarPrivateTrackersOnlyRef.current});
          },
        },
      ]}
    />
  );
};

export default MiscUISettingsList;
