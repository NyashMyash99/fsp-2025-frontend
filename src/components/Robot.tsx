import { type JSX, useEffect, useState } from 'react';
import { Card, CardContent, Stack } from '@mui/material';
import { Message } from '../utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';

import robotThai from '../assets/images/robot-thai.png';
import robotEgypt from '../assets/images/robot-egypt.png';
import robotLazy from '../assets/images/robot-lazy.png';
import robotMountain from '../assets/images/robot-mountain.png';
import robotDubai from '../assets/images/robot-dubai.png';
import robotSea from '../assets/images/robot-sea.png';
import robotCity from '../assets/images/robot-city.png';

type RobotItem = { img: string; description: Message };

const robotItems: RobotItem[] = [
  { img: robotThai, description: Message.ROBOT_THAI },
  { img: robotEgypt, description: Message.ROBOT_EGYPT },
  { img: robotLazy, description: Message.ROBOT_LAZY },
  { img: robotMountain, description: Message.ROBOT_MOUNTAIN },
  { img: robotDubai, description: Message.ROBOT_DUBAI },
  { img: robotSea, description: Message.ROBOT_SEA },
  { img: robotCity, description: Message.ROBOT_CITY },
];

export function Robot(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % robotItems.length),
      7_000,
    );

    return () => clearInterval(interval);
  }, []);

  const current = robotItems[index] ?? { img: '', description: '' };

  return (
    <Stack width="40%" justifyContent="center" gap="16px">
      <Card>
        <CardContent>{t(current.description)}</CardContent>
      </Card>

      <img src={current.img} alt="robot" loading="lazy" />
    </Stack>
  );
}
