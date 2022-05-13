import ethLogo from '../images/icon/eth-logo.svg'
import avaxLogo from '../images/icon/avax-logo.svg'
import moonbeamLogo from '../images/icon/moonbeam-logo.svg'
import fantomLogo from '../images/icon/fantom-logo.svg'
import polygonLogo from '../images/icon/polygon-logo.svg'
import lunaLogo from '../images/icon/Luna.svg'
import ustLogo from '../images/icon/UST.svg'

const widgetSidebarData = [
    // {
    //     id: 1,
    //     title: "Status",
    //     content : [
    //         {
    //             field: 'Buy Now',
    //             checked: 'checked'
    //         },
    //         {
    //             field: 'On Auctions'
    //         },
    //         {
    //             field: 'Has Offers'
    //         },
    //     ]
    // },

    {
        id: 1,
        title: "Chains",
        content : [
            {
                field: 'Ethereum',
                img:ethLogo
            },
            {
                field: 'Avalanche',
                img:avaxLogo
            },
            {
                field: 'Fantom',
                img:fantomLogo
            },
            {
                field: 'Polygon',
                img:polygonLogo
            },
            {
                field: 'Moonbeam',
                img:moonbeamLogo
            },
        ]
    },
    {
        id: 2,
        title: "Coins",
        content : [
            {
                field: 'AVAX',
                img:avaxLogo
            },
            {
                field: 'LUNA',
                img:lunaLogo
            },
            {
                field: 'UST',
                img:ustLogo
            },
        ]
    },
    // {
    //     id: 4,
    //     title: "Collections",
    //     content : [
    //         {
    //             field: 'MetaWarden'
    //         },
    //         {
    //             field: 'CloneX'
    //         },
    //         {
    //             field: 'Bored ape yacht club'
    //         },
    //         {
    //             field: 'Galactic Punk'
    //         },
    //         {
    //             field: 'Aavegotchi'
    //         },
    //     ]
    // },
]

export default widgetSidebarData;