import { Link } from 'react-router-dom'
import { MdLightMode } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { truncate, useGlobalState } from '../store'
import { connectWallet } from '../Blockchain.services'

const Header = () => {
  const [theme, setTheme] = useState(localStorage.theme)
  const themeColor = theme === 'dark' ? 'light' : 'dark'
  const darken = theme === 'dark' ? true : false
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(themeColor)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [themeColor, theme])

  const toggleLight = () => {
    const root = window.document.documentElement
    root.classList.remove(themeColor)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
    setTheme(themeColor)
  }

  return (
    <header className="sticky top-0 z-50 dark:text-blue-500">
      <nav
        className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between
      bg-white dark:bg-[#212936]"
      >
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="grow flex flex-row justify-between items-center p-2">
            <Link
              to={'/'}
              className="flex flex-row justify-start items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
                viewBox="0 0 768.000000 228.000000"
                preserveAspectRatio="xMidYMid meet"
                className="cursor-pointer"
              >
                <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M1528 1883 c-3 -56 -4 -57 -47 -83 -25 -14 -46 -30 -48 -35 -3 -11
80 -65 101 -65 7 0 34 12 60 26 l47 26 -3 -128 -3 -127 -100 -58 c-55 -32
-105 -59 -111 -59 -6 0 -12 23 -13 55 l-2 54 48 30 c26 17 53 33 58 36 6 3 6
7 -1 10 -6 3 -51 29 -100 56 -48 28 -94 53 -101 56 -10 4 -13 -33 -13 -185 l0
-190 -52 -31 c-29 -16 -55 -28 -57 -25 -6 6 -9 64 -10 239 l-1 140 -50 28 -50
28 0 -185 0 -186 -27 -17 c-15 -10 -89 -54 -166 -98 -77 -45 -139 -85 -140
-91 0 -10 81 -62 100 -63 7 -1 83 40 169 89 86 50 160 90 165 90 6 0 9 -26 7
-57 l-3 -58 -70 -40 c-164 -93 -255 -149 -255 -156 0 -7 173 -113 205 -125 12
-5 15 5 15 55 l0 61 47 29 c26 16 50 28 54 26 3 -3 5 -19 4 -37 -2 -18 -3 -72
-4 -120 l-1 -86 -51 -32 c-29 -17 -48 -35 -43 -40 5 -4 81 -49 168 -100 l160
-92 40 23 c23 13 73 41 111 64 l70 41 3 61 3 62 -43 27 c-64 40 -72 38 -78
-24 -5 -49 -8 -54 -50 -82 l-45 -30 -3 55 -3 54 -55 32 c-30 17 -53 36 -51 43
2 6 49 38 105 71 107 63 112 69 112 147 0 47 0 48 55 79 l55 31 0 133 0 133
55 31 55 31 0 198 0 197 -103 58 c-57 31 -106 57 -109 57 -4 0 -8 -26 -10 -57z"/>
                  <path d="M761 1593 c3 -19 -2 -34 -10 -29 -5 3 -9 0 -8 -7 2 -51 -3 -56 -114
-118 -61 -35 -113 -69 -116 -76 -3 -8 4 -21 15 -29 15 -10 21 -24 19 -45 -2
-27 -11 -36 -74 -72 -40 -22 -73 -43 -73 -47 0 -8 89 -60 103 -60 7 0 33 13
58 29 l45 29 -4 60 -4 61 48 30 c72 46 84 47 143 9 l53 -32 57 31 56 31 -3 64
c-4 71 -7 75 -77 113 -27 15 -54 30 -60 33 -5 4 -18 5 -29 3 -10 -1 -15 2 -12
7 4 6 2 14 -4 17 -6 4 -10 3 -9 -2z m-194 -305 c-3 -8 -6 -5 -6 6 -1 11 2 17
5 13 3 -3 4 -12 1 -19z m20 -10 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12
1 -19z"/>
                  <path d="M3905 1559 c-45 -11 -63 -23 -88 -59 -19 -28 -23 -113 -7 -156 6 -14
67 -84 135 -155 l125 -128 0 -55 c0 -47 -4 -57 -26 -75 -46 -36 -162 -24 -180
18 -3 9 -9 41 -13 71 -5 47 -9 55 -28 58 -22 3 -23 0 -23 -63 0 -38 6 -78 15
-94 18 -37 79 -61 151 -61 109 0 164 46 164 137 0 29 -6 69 -14 87 -8 18 -68
87 -135 153 l-121 119 0 57 c0 78 19 97 98 97 82 0 96 -13 102 -97 5 -65 6
-68 30 -68 24 0 25 3 28 62 5 102 -30 144 -128 156 -25 3 -63 1 -85 -4z"/>
                  <path d="M4568 1561 c-75 -15 -118 -68 -118 -146 0 -64 28 -106 152 -231 117
-119 121 -124 126 -173 4 -43 1 -53 -21 -75 -22 -22 -35 -26 -85 -26 -85 0
-105 19 -112 102 -5 59 -6 63 -30 63 -24 0 -25 -3 -28 -60 -5 -107 47 -155
168 -155 105 0 152 33 165 115 14 83 -6 118 -142 257 -122 123 -126 129 -131
177 -4 43 -1 53 21 75 22 22 35 26 80 26 79 0 100 -20 107 -102 5 -59 6 -63
30 -63 24 0 25 2 25 67 0 98 -36 139 -130 151 -22 3 -56 2 -77 -2z"/>
                  <path d="M1970 1215 l0 -335 25 0 25 0 1 233 c1 127 2 238 3 246 4 46 33 -5
128 -226 104 -243 107 -248 137 -251 l31 -3 0 336 0 336 -27 -3 -28 -3 -1
-250 c-1 -145 -5 -250 -11 -252 -5 -2 -56 106 -113 239 -57 134 -108 249 -113
256 -5 6 -20 12 -33 12 l-24 0 0 -335z"/>
                  <path d="M2495 1537 c-3 -7 -4 -156 -3 -332 l3 -320 139 -3 c77 -1 143 1 148
6 5 5 6 16 2 25 -5 15 -23 17 -120 17 l-114 0 0 124 c0 143 -6 136 106 136 72
0 74 1 74 25 0 25 -1 25 -90 25 l-90 0 0 125 0 125 109 0 c113 0 129 6 115 45
-5 12 -30 15 -140 15 -99 0 -136 -3 -139 -13z"/>
                  <path d="M2867 1543 c-3 -5 27 -79 65 -165 l71 -157 -26 -58 c-14 -32 -48
-109 -76 -171 l-51 -113 31 3 c28 3 34 11 84 123 30 66 60 120 67 120 6 0 37
-55 67 -122 52 -116 57 -123 84 -123 19 0 27 4 24 13 -2 6 -35 81 -72 165
l-68 153 72 160 c39 88 71 164 71 170 0 6 -12 9 -27 7 -25 -3 -33 -16 -83
-125 -30 -68 -59 -121 -65 -120 -5 2 -31 52 -58 112 -26 60 -52 115 -58 122
-12 14 -45 18 -52 6z"/>
                  <path d="M3314 1536 c-3 -7 -4 -142 -2 -299 3 -270 4 -287 24 -314 35 -48 79
-64 161 -61 78 4 117 23 140 69 9 17 13 105 13 322 l0 298 -27 -3 -28 -3 0
-293 0 -294 -28 -24 c-22 -19 -39 -24 -82 -24 -115 0 -115 -1 -115 355 l0 285
-25 0 c-14 0 -28 -6 -31 -14z"/>
                  <path d="M4930 1216 l0 -336 30 0 30 0 0 99 c0 113 -1 111 87 111 68 0 119 23
141 64 25 46 25 290 -1 329 -29 45 -72 60 -184 65 l-103 5 0 -337z m219 255
c27 -27 34 -71 29 -191 -4 -128 -14 -140 -119 -140 l-69 0 0 175 0 175 70 0
c56 0 74 -4 89 -19z"/>
                  <path d="M5377 1544 c-4 -4 -7 -155 -7 -336 l0 -328 30 0 30 0 0 150 0 150
105 0 105 0 0 -150 0 -150 30 0 29 0 3 228 c2 125 2 276 0 335 l-3 108 -27 -3
-27 -3 -3 -152 -3 -153 -104 0 -104 0 -3 153 c-3 144 -4 152 -23 155 -12 2
-24 0 -28 -4z"/>
                  <path d="M5879 1518 c-1 -18 -1 -69 -1 -113 0 -44 1 -180 1 -302 l1 -223 146
0 c145 0 145 0 142 23 -3 21 -8 22 -118 27 l-115 5 0 120 0 120 70 3 c101 3
117 8 113 35 -3 20 -10 22 -93 27 l-90 5 0 120 0 120 110 5 c109 5 110 5 110
30 l0 25 -137 3 -138 3 -1 -33z"/>
                  <path d="M6290 1216 l0 -337 27 3 c20 2 28 9 29 23 0 11 1 61 2 111 l2 92 28
3 c59 9 65 3 125 -116 54 -108 59 -115 87 -115 16 0 30 2 30 5 0 3 -25 55 -55
115 -30 60 -55 114 -55 118 0 5 11 14 25 20 46 21 60 65 60 192 0 182 -26 210
-202 218 l-103 5 0 -337z m210 264 c25 -13 38 -67 39 -155 1 -81 -13 -131 -39
-145 -10 -6 -48 -10 -84 -10 l-66 0 0 160 0 160 66 0 c36 0 74 -5 84 -10z"/>
                  <path d="M6747 1543 c-4 -3 -7 -154 -7 -335 l0 -328 145 0 145 0 0 25 0 25
-115 0 -115 0 0 125 0 124 88 3 c87 3 87 3 90 31 l3 27 -90 0 -91 0 0 125 0
124 108 3 107 3 3 28 3 27 -134 0 c-73 0 -137 -3 -140 -7z"/>
                  <path d="M4651 719 c-5 -13 -25 -62 -45 -109 -39 -90 -41 -100 -27 -100 5 0
15 15 21 34 11 36 26 46 65 46 39 0 54 -10 65 -46 10 -30 30 -47 30 -26 0 11
-82 206 -91 216 -5 5 -12 -1 -18 -15z m34 -69 c19 -36 13 -50 -20 -50 -13 0
-27 4 -30 10 -5 9 20 70 30 70 2 0 12 -14 20 -30z"/>
                  <path d="M4867 733 c-4 -3 -7 -56 -7 -116 l0 -109 70 4 c85 5 110 24 117 90 7
57 -15 100 -61 122 -34 16 -107 22 -119 9z m137 -54 c24 -27 27 -38 23 -72 -8
-56 -27 -71 -89 -72 l-53 0 -3 84 c-3 95 2 105 58 97 22 -4 45 -17 64 -37z"/>
                  <path d="M5314 730 c-54 -22 -82 -107 -53 -163 45 -88 186 -69 205 28 17 95
-67 170 -152 135z m86 -25 c32 -17 55 -72 45 -107 -13 -42 -46 -68 -84 -68
-40 1 -62 14 -79 47 -26 48 -5 114 42 133 31 13 44 12 76 -5z"/>
                  <path d="M5603 734 c-16 -7 -19 -224 -4 -224 6 0 11 19 13 42 3 38 6 43 35 50
32 8 73 50 73 73 0 37 -78 76 -117 59z m61 -24 c50 -19 25 -89 -31 -90 -20 0
-23 5 -23 44 0 26 5 46 13 49 6 3 13 6 14 6 1 1 13 -3 27 -9z"/>
                  <path d="M5748 733 c-2 -5 -4 -55 -4 -113 l1 -105 64 0 c63 0 65 1 74 30 12
36 23 45 59 45 42 0 56 -9 68 -46 10 -31 30 -47 30 -25 0 12 -80 204 -89 214
-5 4 -28 -38 -53 -95 l-44 -103 -42 -3 -42 -3 0 100 c0 55 -4 102 -9 106 -5 3
-11 2 -13 -2z m219 -84 c14 -36 10 -49 -15 -49 -34 0 -41 13 -27 48 17 40 27
40 42 1z"/>
                  <path d="M6000 730 c0 -5 13 -10 29 -10 30 0 53 -19 50 -42 -5 -41 2 -168 11
-168 5 0 11 45 12 103 l3 102 33 3 c66 7 29 22 -53 22 -50 0 -85 -4 -85 -10z"/>
                  <path d="M6188 733 c-7 -18 4 -223 13 -223 5 0 9 25 9 55 l0 55 39 0 c22 0 43
5 46 10 4 6 -12 10 -40 10 l-46 0 3 38 c3 36 4 37 46 40 23 2 42 7 42 13 0 11
-107 13 -112 2z"/>
                  <path d="M6384 730 c-39 -16 -64 -59 -64 -111 0 -40 5 -52 31 -78 25 -25 39
-31 76 -31 79 0 128 71 104 151 -19 63 -86 94 -147 69z m86 -25 c75 -39 47
-175 -36 -175 -46 0 -63 8 -79 41 -29 55 -11 119 39 139 31 13 44 12 76 -5z"/>
                  <path d="M6588 733 c-16 -4 -18 -18 -18 -115 0 -83 3 -109 13 -106 6 3 13 23
15 46 4 56 26 55 79 -3 22 -25 49 -45 60 -45 17 0 21 10 29 70 5 39 13 72 18
73 5 1 21 -26 35 -61 14 -35 30 -64 36 -64 5 0 23 28 40 62 16 35 35 63 40 64
6 0 14 -32 19 -71 6 -50 13 -73 22 -73 7 0 12 6 10 13 -2 6 -10 53 -17 102
-18 131 -22 133 -65 37 -20 -45 -41 -82 -46 -82 -8 0 -43 69 -70 140 -13 35
-22 14 -38 -88 -7 -45 -17 -85 -22 -88 -11 -7 -57 44 -58 62 0 6 7 17 15 24
21 17 19 63 -3 83 -20 18 -67 28 -94 20z m80 -35 c29 -24 -2 -78 -45 -78 -21
0 -23 5 -23 43 0 24 3 47 7 50 8 8 42 -1 61 -15z"/>
                  <path d="M5124 693 c-16 -39 -49 -121 -65 -160 -14 -38 8 -26 28 15 17 35 21
37 63 37 42 0 46 -2 63 -37 20 -44 42 -53 26 -11 -32 85 -83 193 -90 193 -5 0
-16 -17 -25 -37z m46 -42 c14 -34 7 -51 -21 -51 -25 0 -32 20 -20 53 14 35 26
34 41 -2z"/>
                </g>
              </svg>
              <span className="invisible md:visible dark:text-gray-300 font-bold ">
                Unmatched Excellence: Leading the Industry
              </span>
            </Link>

            <div className="flex flex-row justify-center items-center space-x-5">
              {darken ? (
                <MdLightMode
                  className="cursor-pointer"
                  size={25}
                  onClick={toggleLight}
                />
              ) : (
                <FaMoon
                  className="cursor-pointer"
                  size={25}
                  onClick={toggleLight}
                />
              )}

              {connectedAccount ? (
                <button
                  className="px-4 py-2.5 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                >
                  {truncate(connectedAccount, 4, 4, 11)}
                </button>
              ) : (
                <button
                  className="px-4 py-2.5 bg-blue-600 text-white
                  font-medium text-xs leading-tight uppercase
                  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none
                  focus:ring-0 active:bg-blue-800 active:shadow-lg
                  transition duration-150 ease-in-out dark:text-blue-500
                  dark:border dark:border-blue-500 dark:bg-transparent"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
