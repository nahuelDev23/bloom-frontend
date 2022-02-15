import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface ImageTextItem {
  text: string;
  illustrationSrc: StaticImageData;
  illustrationAlt: string;
}

interface ImageTextGridProps {
  items: Array<ImageTextItem>;
  translations: string;
}

const containerStyle = {
  width: { xs: '100%', md: '60%' },
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'wrap',
} as const;

const itemContainerStyle = {
  position: 'relative',
  width: { xs: '100%', sm: '50%' },
  paddingX: 2,
  paddingY: 1,
  alignText: 'center',
} as const;

const imageContainerStyle = {
  position: 'relative',
  width: 100,
  height: 100,
  marginY: 3,
  marginX: 'auto',
} as const;

const ImageTextGrid = (props: ImageTextGridProps) => {
  const { items, translations } = props;

  const t = useTranslations(translations);
  const tS = useTranslations('Shared');

  return (
    <Box sx={containerStyle}>
      {items.map((item, i) => (
        <Box key={`item${i}`} sx={itemContainerStyle}>
          <Box sx={imageContainerStyle}>
            <Image
              alt={tS(item.illustrationAlt)}
              src={item.illustrationSrc}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Typography variant="body1" component="p">
            {t(item.text)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ImageTextGrid;
