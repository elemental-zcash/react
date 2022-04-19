// @ts-nocheck
import React, { useState } from 'react';
import { Box, Row, Text, extend, useWindowDimensions, Button, Image, useTheme, ThemeProvider, useLayout } from 'elemental-react';
// import { ThemeProvider } from 'elemental-react/lib/styled';

import { Svg, G, Path, Rect, Circle } from '@react-platform/svg';

// @ts-ignore
import { DefaultButton } from '@elemental-zcash/components/lib/buttons';
import { FilledCard } from '@elemental-zcash/components/lib/cards';

import { Icon, TextInput, InputField, TruncatedZAddress, CryptoAddressCopy } from '@elemental-zcash/components';

// import { CryptoAddressCopy, QRCodeIcon } from '@elemental-zcash/components/lib/addresses/CryptoAddress';

import { CopyBoxIcon } from '@elemental-zcash/icons';

// import { TextInput } from '@react-platform/native';
// import { Text as CoreText } from '@react-platform/core';


import { ColdStorageIcon, DeveloperIcon, EarnIcon, ExchangeIcon, FavoriteIcon, GrantIcon, ReplyIcon, RepostIcon, ShareIcon, SocialIcon, ZcashIcon, ZecTabIcon } from '../components/icons';
import TabBar from '../components/TabBar';
import AppBar from '../components/AppBar';
import { MoneyTotalSubtext, MoneyTotalTitle } from '../components/Currency';
import FilledRow from '../components/FilledRow';

import { ShieldIcon } from '@elemental-zcash/icons';


import data from './data.json';
import zecPagesData from './zecpages-data.json';
import { getTimeAgo } from '../utils/time';
import QuotePost from '../components/QuotePost';
import { NameText, UsernameText } from '../components/BasePost';
import ProfileIcon from '../components/ProfileIcon';
import Section from '../components/Section';


// #53a










const ProfileNamesRow = ({ username, name }) => (
  <Box>
    <NameText mb={1}>{name}</NameText>
    <UsernameText>{`@${username}`}</UsernameText>
  </Box>
);
const AnonProfileNamesRow = ({ username, name }) => (
  <Box>
    <NameText color="#737373" fontWeight={500} mb={1}>{name}</NameText>
    <UsernameText fontFamily="primary">{`${username}`}</UsernameText>
  </Box>
);

const TextPlaceHolder = () => (
  <>
    <Box bg="#DEDEDE" height={16} width="90%" mb="4px" />
    <Box bg="#DEDEDE" height={16} width="80%" mb="4px" />
    <Box bg="#DEDEDE" height={16} width="90%" mb="4px" />
  </>
)

const PostText = ({ text }) => (
  <Box pt="4px">
    {text ? (
      <Text fontSize={16} fontFamily="Helvetica">
        {text}
      </Text>
    ) : <TextPlaceHolder />}
  </Box>
)

const ZecPostFeedItem = ({ username, name, createdAt, inReplyToStatusId, isRepliedTo, text, ...props }) => (
  <Box bg="white" borderRadius={12} {...props}>
    <Box py={12} px={[16, 40]}>
      <Row justifyContent="space-between" flex={1}>
        <Box mr={12} alignItems="center">
          {inReplyToStatusId && <Box width="2px" height={32} bg="#B5B5B5" mb={2} />}
          <ProfileIcon size={40} /*bg="#F7F7F7"*/ bg="white" borderColor="#D9D9D9" borderWidth={1}>
            <Icon icon={ShieldIcon} color="primary" />  
          </ProfileIcon>  
          {isRepliedTo && <Box width="2px" flex={1} bg="#B5B5B5" mb={2} />}
        </Box>
        <AnonProfileNamesRow username={username || 'zs*****'} name={name || 'ANONYMOUS'} />
        <Box flex={1} />
        {/* <Box>
          <NameText mb={1}>{user.name}</NameText>
          <UsernameText>{`@${user.screen_name}`}</UsernameText>
        </Box> */}
        {/* <Box flex={1} /> */}
        <Text fontFamily="Helvetica" fontSize={16}>{getTimeAgo(createdAt)}</Text>
      </Row>
      <Box pt={16}>
        <PostText text={text} />
      </Box>
    </Box>
  </Box>
)

const MicroPostFeedItem = ({ id, user, retweetUser, createdAt, isRepliedTo, retweetedStatus, quotedStatus, text, inReplyToStatusId, ...props }) => (
  <Box {...props}>
    {retweetedStatus && (
      <Row px={[16, 40]} alignItems="center" pt={12}>
        <Row width={40} mr={12}>
          <Box flex={1} />
          <RepostIcon fill="#6D6D6D" />
        </Row>
        <Text fontFamily="Helvetica" fontSize={14} color="#6D6D6D">{`${retweetUser.name} Retweeted`}</Text>
      </Row>
    )}
    <Row py={12} px={[16, 40]}>
      <Box mr={12} alignItems="center">
        {inReplyToStatusId && <Box width="2px" height={32} bg="#B5B5B5" mb={2} />}
        <ProfileIcon size={40} uri={user.profile_image_url_https} />
        {isRepliedTo && <Box width="2px" flex={1} bg="#B5B5B5" mb={2} />}
      </Box>
      <Box flex={1}>
        <Row justifyContent="space-between" flex={1}>
          <ProfileNamesRow username={user.screen_name} name={user.name} />
          {/* <Box>
            <NameText mb={1}>{user.name}</NameText>
            <UsernameText>{`@${user.screen_name}`}</UsernameText>
          </Box> */}
          {/* <Box flex={1} /> */}
          <Text fontFamily="Helvetica" fontSize={16}>{getTimeAgo(createdAt)}</Text>
        </Row>
        <PostText text={text} />
        {quotedStatus && (
          <QuotePost user={quotedStatus.user} createdAt={new Date(quotedStatus.created_at)} text={quotedStatus.text} />
        )}
        <Row mt={12} justifyContent="space-between">
            {[
              { component: ReplyIcon, id: 'reply' },
              { component: RepostIcon, id: 'repost' },
              { component: FavoriteIcon, id: 'favorite' },
              { component: ShareIcon, id: 'share',
            }].map(({ component: Comp, id: actionId }) => {
              const hrefById = {
                reply: `https://twitter.com/intent/tweet?in_reply_to=${id}`,
                repost: `https://twitter.com/intent/retweet?tweet_id=${id}`,
                favorite: `https://twitter.com/intent/like?tweet_id=${id}`,
              };
              return (
                <Box mr={16} as="a" href={actionId === 'share' ? '#' : hrefById[actionId]} target={actionId !== 'share' && '_blank'} onClick={(actionId === 'share') ? () => { if (typeof navigator !== 'undefined' && navigator?.canShare && navigator.share) { navigator?.share({ url: `https://twitter.com/${user.screen_name}/${id}`}) } } : undefined}>
                  <Comp fill="#5F6E7A" />
                </Box>
              );
            })}
            <Box flex={1} />
            <Box
              as="a"
              href="#"
              onClick={() => {
                setMemoContent(`TIP_TWEET:${id}`);
                setTipVisible(!tipVisible);
              }}
            >
              <ZcashIcon />
            </Box>
          </Row>
      </Box>
    </Row>
  </Box>
);

// id
// memo
// datetime
// amount
// txid
// likes
// reply_zaddr
// reply_to_post
// reply_count
// ispoll
// board_name
// board_zaddr
// username 

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const { theme } = useTheme();
  const [items, setItems] = useState(data.slice(0, 10));
  const { breakpoint } = useLayout();

  console.log({ breakpoint });


  return (
    <Box width="100%" minHeight={720} bg="#D0EDF1">
      <AppBar
        bg="black"
        color="white"
        title={(
          <Text fontSize={20} lineHeight={24}>
            <Text fontSize={20} lineHeight={24} bold>ZPublish</Text>
            <Text fontSize={20} lineHeight={24} fontWeight="regular"> – </Text>
            <Text fontSize={20} lineHeight={24} fontWeight="regular">ZECpages</Text>
          </Text>
        )}
      />
      <Box px={[32, 40]} py={20} center>
        <Text fontSize={20} fontFamily="secondary" center bold>
          {'ZEC-powered anonymous memo board '}
          <Text fontSize={20} fontFamily="secondary" color="blue">(how it works)</Text>
        </Text>
      </Box>
      <Box px={[16, 40]} mb={16}>
        <InputField label="Write your post here..." labelVisible={false}>
          {({ label, value }) => <TextInput p={16} borderColor="#313880" placeholderColor="#636363" borderWidth={2} label={label} value={value} multiline />}
        </InputField>
      </Box>
      <Box px={[16, 40]} mb={16}>
        <Box>
          <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, icons: { ...theme.colors.icons, qrcode_box: '#fff' } }}}>
            <CryptoAddressCopy /*bg="#313880"*/ bg="#224259" color="white" address="zs1j29m7zdhhyy2eqrz89l4zhk0angqjh368gqkj2vgdyqmeuultteny36n3qsm47zn8du5sw3ts7f" />
          </ThemeProvider>
        </Box>
      </Box>
      <Section py={16}>
        {zecPagesData.map(({ datetime, memo, id }, i) => (
          <ZecPostFeedItem key={id || `index-${i}`} createdAt={new Date(Number(datetime))} text={memo} mb={16} bg="#E9F7F9" />
        ))}
        {/* <Box bg="white" p="8px" borderRadius={12}>
          <ProfileIcon size={40} bg="#F7F7F7">
            <Icon icon={ShieldIcon} color="primary" />  
          </ProfileIcon>  
        </Box> */}
      </Section>
      {/* <Box p={16}>
        <InputField label="Label" mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} />}
        </InputField>
      </Box> */}
      <Box>
        {items.slice(0, 10).map(({
          quoted_status, retweeted_status,
          in_reply_to_status_id,
          in_reply_to_screen_name,
          entities, in_reply_to_user_id_str, user, text,
          ...args
        }) => {
          let timeAgoText;
          const createdAt = new Date(args.created_at);

          // const secondsDiff = ((new Date()).getTime() - createdAt.getTime()) / 1000;
          let inReplyToUser;
          if (in_reply_to_screen_name) {
            if (entities?.user_mentions) {
              entities.user_mentions.forEach(({ screen_name, name, id_str }) => {
                if (id_str === in_reply_to_user_id_str) {
                  inReplyToUser = { name, screen_name };
                }
              })
            }
          }

          return (
            <Box borderTopWidth={1} borderBottomWidth={1} borderColor="#EAEAEA" bg="#E9F7F9">
              {retweeted_status ? (
                <MicroPostFeedItem
                  user={retweeted_status.user}
                  createdAt={new Date(retweeted_status.created_at)}
                  quotedStatus={retweeted_status.quoted_status}
                  retweetUser={user}
                  retweetedStatus={retweeted_status}
                  text={retweeted_status.text}
                  inReplyToStatusId={in_reply_to_status_id}
                />
              ) : (
                <>
                  {in_reply_to_status_id && (
                    <>
                      <MicroPostFeedItem user={inReplyToUser} isRepliedTo />
                      <Text fontSize={16} color="blue" fontFamily="Helvetica" ml={68} my={1}>Show this thread</Text>
                    </>
                  )}
                  <MicroPostFeedItem user={user} createdAt={createdAt} quotedStatus={quoted_status} text={text} inReplyToStatusId={in_reply_to_status_id} />
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomeScreen;
