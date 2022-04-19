
// @ts-ignore
import { Svg, Rect, G, Path, Circle } from '@react-platform/svg';

export const RepostIcon = ({ fill = '#000000' }) => (
  <Svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <G id="/microposts:mobile" transform="translate(-131.000000, -900.000000)">
              <G id="&lt;MicroPost&gt;-Copy" transform="translate(0.000000, 497.000000)">
                  <G id="Group-17" transform="translate(74.000000, 403.000000)" filter="url(#filter-1)">
                      <G transform="translate(57.000000, 0.000000)" id="Group-15">
                          <Rect id="Rectangle" x="0" y="0" width="24" height="24"></Rect>
                          <G id="Group" transform="translate(1.000000, 5.000000)" fill={fill} fill-rule="nonzero">
                              <Path d="M4.56097561,0 L9.12195122,4.56097561 L5.63414634,4.56097561 L5.63414634,11 L12.6097561,11 L14.7560976,13.1463415 L5.63414634,13.1463415 C4.44875468,13.1463415 3.48780488,12.1853917 3.48780488,11 L3.48780488,4.56097561 L0,4.56097561 L4.56097561,0 M17.4390244,13.4146341 L12.8780488,8.85365854 L16.3658537,8.85365854 L16.3658537,2.41463415 L9.3902439,2.41463415 L7.24390244,0.268292683 L16.3658537,0.268292683 C17.5512453,0.268292683 18.5121951,1.22924249 18.5121951,2.41463415 L18.5121951,8.85365854 L22,8.85365854 L17.4390244,13.4146341 Z" id="Shape"></Path>
                          </G>
                      </G>
                  </G>
              </G>
          </G>
      </G>
  </Svg>
);
export const ReplyIcon = ({ fill = '#000' }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" overflow="visible">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill={fill} d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </Svg>
);

export const FavoriteIcon = ({ fill = '#000' }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" overflow="visible">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill={fill} d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
  </Svg>
);

export const ShareIcon = ({ fill = '#000' }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" overflow="visible">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill={fill} d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
  </Svg>
);

export const ZcashIcon = ({ fill = '#231F20' }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" overflow="visible">
    <G id="Page-1_1_">
      <G id="_x2F_microposts:mobile_1_" transform="translate(-320 -900)">
        <G id="_x3C_MicroPost_x3E_-Copy_1_" transform="translate(0 497)">
          <G id="Group-19_1_" transform="translate(74 403)">
            <G id="Group_1_" transform="translate(246)">
              <Path id="Shape_1_" fill={fill} d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 22.02C6.47 22.02 1.98 17.53 1.98 12S6.47 1.98 12 1.98 22.02 6.47 22.02 12 17.53 22.02 12 22.02z"/>
              <Circle id="Oval_1_" cx="12.13" cy="12.13" r="9.49" fill="#f4b728"/>
              <Path id="Path_1_" class="st0" d="M7.91 15.71v1.82h3.23v1.99h1.98v-1.99h3.23v-2.41h-5.01l5.01-6.83V6.47h-3.23V4.48h-1.98v1.99H7.91v2.41h5.01z"/>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
