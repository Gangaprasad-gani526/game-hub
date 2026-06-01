import type { Platform } from '@/hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'//font awasome
import { MdPhoneIphone } from 'react-icons/md';
import { SiNiconico } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons';

export interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNiconico,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
    return (
        <HStack marginY={'10px'}>
            {platforms.map(platform => (
                //<Text key={platform.id}>{platform.name}</Text>


                <Icon as={iconMap[platform.slug]} color='gray.500' />



            ))}
        </HStack>
    )
}

export default PlatformIconList
