// @ts-nocheck
import React, { useMemo } from 'react';
import { Svg, Defs, G, Path, Rect, Image, ClipPath, LinearGradient, Stop } from 'react-primitives-svg';

import genMatrix from './genMatrix';
import transformMatrixIntoPath from './transformMatrixIntoPath';



const renderLogo = ({
  size,
  logo,
  svgLogo,
  logoSize,
  logoBackgroundColor,
  logoMargin,
  logoBorderRadius
}: any) => {
  const logoPosition = (size - logoSize - logoMargin * 2) / 2
  const logoBackgroundSize = logoSize + logoMargin * 2
  const logoBackgroundBorderRadius =
    logoBorderRadius + (logoMargin / logoSize) * logoBorderRadius

  return (
    <G x={logoPosition} y={logoPosition}>
      {/* <Defs>
        <ClipPath id='clip-logo-background'>
          <Rect
            width={logoBackgroundSize}
            height={logoBackgroundSize}
            rx={logoBackgroundBorderRadius}
            ry={logoBackgroundBorderRadius}
          />
        </ClipPath>
        <ClipPath id='clip-logo'>
          <Rect
            width={logoSize}
            height={logoSize}
            rx={logoBorderRadius}
            ry={logoBorderRadius}
          />
        </ClipPath>
      </Defs> */}
      <G>
        <Rect
          width={logoBackgroundSize}
          height={logoBackgroundSize}
          fill={logoBackgroundColor}
          clipPath='url(#clip-logo-background)'
          rx={logoBorderRadius}
          ry={logoBorderRadius}
        />
      </G>
      <G x={logoMargin} y={logoMargin}>
        {Boolean(svgLogo) ? (
          <G x={logoSize / 2} y={logoSize / 2}>
            {svgLogo}
          </G>
        ) : (
          <Image
          width={logoSize}
          height={logoSize}
          preserveAspectRatio='xMidYMid slice'
          href={logo}
          clipPath='url(#clip-logo)'
        />
        )}
      </G>
    </G>
  )
}

const QRCode = ({
  value = 'hello world',
  size = 100,
  color = 'black',
  style,
  backgroundColor = 'white',
  svgLogo,
  logo,
  logoSize = size * 0.2,
  logoBackgroundColor = 'none',
  logoMargin = 2,
  logoBorderRadius = 0,
  quietZone = 0,
  enableLinearGradient = false,
  gradientDirection = ['0%', '0%', '100%', '100%'],
  linearGradient = ['rgb(255,0,0)', 'rgb(0,255,255)'],
  ecl = 'M',
  getRef,
  onError
}: any) => {
  const result = useMemo(() => {
    try {
      return transformMatrixIntoPath(genMatrix(value, ecl), size)
    } catch (error) {
      if (onError && typeof onError === 'function') {
        onError(error)
      } else {
        // Pass the error when no handler presented
        throw error
      }
    }
  }, [value, size, ecl])

  if (!result) {
    return null
  }

  const { path, cellSize } = result

  return (
    <Svg
      ref={getRef}
      viewBox={[
        -quietZone,
        -quietZone,
        size + quietZone * 2,
        size + quietZone * 2
      ].join(' ')}
      width={size}
      height={size}
      style={style}
    >
      <Defs>
        <LinearGradient
          id='grad'
          x1={gradientDirection[0]}
          y1={gradientDirection[1]}
          x2={gradientDirection[2]}
          y2={gradientDirection[3]}
        >
          <Stop offset='0' stopColor={linearGradient[0]} stopOpacity='1' />
          <Stop offset='1' stopColor={linearGradient[1]} stopOpacity='1' />
        </LinearGradient>
      </Defs>
      {backgroundColor ? (
        <G>
          <Rect
            x={-quietZone}
            y={-quietZone}
            width={size + quietZone * 2}
            height={size + quietZone * 2}
            fill={backgroundColor}
          />
        </G>
        ) : null}
      <G>
        <Path
          d={path}
          strokeLinecap='butt'
          stroke={enableLinearGradient ? 'url(#grad)' : color}
          strokeWidth={cellSize}
        />
      </G>
      {(logo || svgLogo) ?
        renderLogo({
          size,
          logo,
          svgLogo,
          logoSize,
          logoBackgroundColor,
          logoMargin,
          logoBorderRadius
        }) : null}
    </Svg>
  )
}

export default QRCode;
