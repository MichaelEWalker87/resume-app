import * as React from "react";
import './LoadIcon.scss';

const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={10}
    // height={10}
    viewBox="0 0 454 280"
    {...props}
    className="filler"
  >
    <defs>
      <linearGradient id="a">
        <stop offset="0%" stopColor="#24799e" />
        <stop offset="50%" stopColor="#ff5757" />
        <stop offset="100%" stopColor="#24799e" />
      </linearGradient>
    </defs>
    <path
      stroke="url(#a)"
      className="load-mw-logo"
      d="M124.996 263.798c-1.3-.077-2.667-.507-3.602-.701a44.794 44.794 0 0 0-2.3-.426c-.383-.05-.856-.174-1.05-.275-.195-.1-.712-.249-1.15-.33-.438-.08-.98-.242-1.204-.358-.224-.116-.712-.279-1.083-.362-.37-.083-.77-.238-.888-.345-.118-.106-.484-.254-.815-.328-.33-.074-.706-.23-.835-.346-.13-.116-.416-.256-.638-.312-.436-.109-2.442-1.108-2.66-1.324a.535.535 0 0 0-.329-.132c-.108 0-.372-.141-.586-.314a11.177 11.177 0 0 0-1.114-.733c-.397-.23-.797-.487-.889-.571-.153-.142-1.087-.78-1.612-1.103a3.756 3.756 0 0 1-.514-.42 11.615 11.615 0 0 0-.765-.653c-1.074-.84-1.49-1.215-2.632-2.369-.658-.664-1.415-1.503-1.684-1.864-.269-.36-.63-.797-.803-.97-.172-.174-.314-.377-.314-.453 0-.075-.124-.249-.275-.386a1.491 1.491 0 0 1-.368-.545c-.05-.162-.24-.473-.422-.69-.182-.217-.33-.503-.33-.636 0-.132-.157-.454-.349-.714-.192-.26-.349-.578-.349-.706s-.123-.39-.274-.582c-.151-.192-.341-.646-.423-1.01-.081-.364-.234-.827-.338-1.03-.105-.204-.291-.873-.414-1.487a32.36 32.36 0 0 0-.436-1.884c-.152-.547-.203-1.278-.176-2.547.037-1.78.153-2.139.48-1.496.091.177.264.378.385.445.12.068.22.202.22.298 0 .148.474.911 1.395 2.241.206.299.849 1.152 1.256 1.668.892 1.132 4.317 4.136 4.715 4.136.074 0 .221.105.327.232.105.128.443.352.75.498.307.146.924.48 1.37.742.447.262 1.075.547 1.396.632.32.085.678.24.795.344.116.103.515.256.886.34.371.083.844.238 1.05.345.207.106.862.261 1.457.344.595.083 1.283.258 1.53.39.378.201.88.24 3.239.244 2.551.006 2.866-.02 3.664-.308.48-.172 1.031-.314 1.225-.314.194 0 .726-.157 1.182-.349.455-.192.947-.349 1.091-.349.144 0 .539-.146.876-.325.338-.18.798-.372 1.022-.428a2.38 2.38 0 0 0 .752-.372c.189-.148.448-.27.577-.27.128 0 .446-.157.706-.35.26-.19.567-.348.682-.348.116 0 .449-.157.74-.349.293-.192.767-.496 1.055-.675a55.848 55.848 0 0 0 2.352-1.556c.635-.437 1.493-1.093 1.826-1.398.168-.153.631-.561 1.03-.907 1.32-1.143 3.951-3.816 5.497-5.582.646-.738 1.75-2.145 1.75-2.23 0-.056.157-.284.349-.506a41.38 41.38 0 0 0 1.404-1.73c.27-.345.63-.793.8-.996.17-.202.434-.531.588-.73.153-.2.436-.54.628-.757.192-.216.694-.795 1.116-1.286 1.62-1.884 3.87-4.03 4.57-4.362.174-.081.315-.192.315-.246 0-.054.283-.206.628-.338.345-.132.628-.295.628-.363 0-.067.267-.194.593-.28a9.113 9.113 0 0 0 1.151-.411c1.593-.718 7.137-.717 8.583.002.27.134.709.29.977.348.269.057.639.222.822.366.183.143.41.26.504.26.095 0 .323.12.508.265.184.145.531.38.77.523.24.143.733.466 1.096.72.602.419.681.44.899.244.13-.12.312-.216.402-.216.09 0 .286-.123.436-.274.15-.15.538-.417.86-.593 1.686-.919 2.576-1.366 2.72-1.366.087 0 .445-.127.795-.282 1.54-.68 7.155-.686 8.662-.009.317.143.777.302 1.023.355.246.052.592.208.768.345.176.138.478.3.67.36.191.06.543.257.78.437.238.181.482.33.544.33.12 0 .109-.012 1.955 1.781 1.328 1.29 2.096 2.15 2.989 3.345.3.402.63.819.732.927.103.109.344.401.536.65.192.25.49.617.663.817.173.2.67.835 1.106 1.411.436.576 1.206 1.55 1.711 2.163a57.567 57.567 0 0 1 1.334 1.675c.471.635 5.763 5.931 5.926 5.931.103 0 .773.493 1.568 1.154.66.548 1.002.794 1.787 1.285.422.264.858.561.968.66.206.185.956.607 1.821 1.024.268.13.637.353.821.498.185.145.44.264.569.264.128 0 .446.157.706.349.26.192.57.35.69.35.12.001.531.156.915.345.384.188.794.345.912.347.118.002.453.126.745.275.291.148.841.337 1.223.418.38.082.873.242 1.093.356 1.001.518 6.95.524 7.948.009.25-.13.829-.295 1.288-.37.459-.073 1.065-.257 1.347-.408.282-.151.607-.276.724-.276.116-.001.525-.156.909-.345.384-.189.767-.345.851-.347.084-.002.618-.256 1.186-.562a30.134 30.134 0 0 1 1.557-.789c.287-.127.523-.283.523-.346s.204-.22.453-.348c2.166-1.113 5.829-4.896 7.206-7.443a4.16 4.16 0 0 1 .437-.635c.135-.153.284-.405.33-.558.126-.409.918-1.207 1.093-1.099.195.12.036 2.676-.23 3.7a20.628 20.628 0 0 0-.356 1.935c-.088.652-.241 1.312-.34 1.466-.1.155-.255.62-.344 1.037-.09.415-.28.949-.422 1.185a3.38 3.38 0 0 0-.355.872c-.051.245-.18.517-.287.605-.106.088-.268.39-.36.672a3.342 3.342 0 0 1-.426.845c-.142.183-.258.397-.258.476 0 .078-.157.348-.35.6-.191.251-.348.493-.348.537 0 .103-1.37 1.902-2.131 2.797-.708.833-1.594 1.719-2.623 2.622-1.071.94-1.102.965-1.857 1.503-.374.266-.82.624-.993.797-.172.173-.374.314-.447.314-.074 0-.38.187-.682.415-.301.228-.623.416-.716.419-.092.002-.217.087-.279.189-.061.102-.347.306-.635.453-2.73 1.398-4.27 2.153-4.391 2.153-.08 0-.22.09-.312.201-.093.111-.504.272-.914.357-.41.085-.818.241-.905.347-.088.106-.473.26-.856.341-.382.082-.882.246-1.11.364-.229.118-.774.281-1.212.362-.438.08-.957.23-1.153.332-.197.102-.826.25-1.399.33-.572.08-1.318.242-1.656.362-3.018.331-6.292 1.168-9.154 1.19-3.192-.105-5.99-.371-8.962-1.126a15.815 15.815 0 0 0-1.814-.359 8.662 8.662 0 0 1-1.683-.42c-.481-.18-1.033-.327-1.225-.327-.193 0-.723-.157-1.18-.35-.455-.191-.94-.349-1.077-.35-.136 0-.562-.155-.946-.344-.384-.189-.807-.345-.942-.348-.134-.002-.542-.156-.907-.343a35.426 35.426 0 0 0-1.5-.707c-.46-.203-.995-.458-1.187-.566a14.11 14.11 0 0 0-.835-.425 5.107 5.107 0 0 1-.82-.49c-.185-.146-.443-.264-.575-.264-.13 0-.35-.124-.486-.274-.137-.15-.46-.344-.72-.43-.259-.085-.471-.212-.471-.281 0-.07-.236-.255-.524-.413a11.134 11.134 0 0 1-1.081-.705 41.79 41.79 0 0 0-.9-.657 6.963 6.963 0 0 1-.64-.52 44.618 44.618 0 0 0-1.117-.977 22.361 22.361 0 0 1-1.524-1.451 431.25 431.25 0 0 0-1.443-1.535c-.961-1.017-.922-.972-2.252-2.596-.629-.768-1.39-1.677-1.69-2.02l-.547-.624-.55.538c-.303.295-.588.687-.634.871a1.677 1.677 0 0 1-.325.6c-.132.147-.416.507-.63.8-1.021 1.395-1.254 1.696-1.808 2.335-.953 1.1-3.774 3.85-3.95 3.85-.054 0-1.283.902-2.366 1.736-.603.465-1.543 1.05-1.69 1.052-.086.001-.333.142-.55.312-.422.333-.912.616-1.824 1.056-.316.153-.616.343-.665.423-.05.08-.324.22-.611.313-.287.092-.616.248-.73.346-.116.098-.482.25-.813.34a4.792 4.792 0 0 0-1.047.43c-.244.15-.544.271-.667.271s-.519.158-.88.35c-.36.192-.796.349-.968.349-.171 0-.557.125-.857.278-.3.152-.923.346-1.384.43-.462.083-1.018.244-1.236.357-1.155.282-2.156.443-3.29.926-3.13.545-6.443.916-9.095.94-2.459.027-4.14-.387-5.749-.484zm-14.767-67.2a16.305 16.305 0 0 0-1.788-.13c-.562-.008-1.13-.072-1.263-.143s-1.024-.17-1.98-.22c-1.136-.06-2.148-.204-2.923-.417-.653-.18-1.553-.364-2.001-.41-.448-.047-.985-.173-1.192-.28-.208-.107-.784-.268-1.28-.356-.495-.089-1.04-.251-1.21-.361-.171-.11-.642-.27-1.047-.354-.405-.085-.933-.273-1.172-.418-.24-.146-.542-.264-.672-.264-.218 0-1.825-.688-2.312-.99a5.374 5.374 0 0 0-.558-.28 9.274 9.274 0 0 1-.698-.346c-.192-.107-.608-.32-.924-.474-.316-.154-.653-.375-.75-.49-.096-.117-.253-.212-.348-.212-.095 0-.41-.188-.7-.418-.29-.23-.578-.419-.64-.419-.063 0-.266-.141-.45-.314-.503-.47-1.625-1.402-1.974-1.64-.782-.532-3.075-3.22-4.053-4.75-.307-.48-.604-.942-.66-1.027a6.173 6.173 0 0 1-.311-.643 7.377 7.377 0 0 0-.338-.697c-.373-.608-.853-1.74-.934-2.2a3.577 3.577 0 0 0-.343-.964c-.139-.243-.296-.808-.349-1.256-.053-.448-.208-1.073-.344-1.389-.137-.316-.295-.974-.351-1.462-.057-.488-.195-1.14-.306-1.449-.112-.308-.293-1.147-.403-1.862-.11-.716-.286-1.47-.392-1.675-.105-.205-.238-.78-.295-1.278-.056-.497-.193-1.156-.302-1.465-.11-.309-.294-1.183-.408-1.943-.114-.76-.273-1.503-.353-1.652-.08-.15-.23-.879-.335-1.62-.104-.741-.28-1.567-.391-1.836-.111-.269-.245-.897-.297-1.395a9.707 9.707 0 0 0-.348-1.675c-.14-.422-.297-1.207-.351-1.745-.054-.537-.216-1.246-.36-1.576a6.073 6.073 0 0 1-.354-1.116c-.051-.285-.202-.643-.336-.797a1.905 1.905 0 0 1-.34-.686c-.11-.462-1.227-1.876-1.755-2.222-.192-.125-.694-.48-1.116-.788-.422-.308-.829-.56-.904-.56-.075 0-.335-.224-.579-.498-.338-.38-.615-.418-.738-1.13-.26-1.497-.13-.561-.364-1.861-.337-1.87-.206-.436-.206-2.931.1-1.978.013-3.047.044-4.158.03-.911.691-2.064 1.32-2.715.275-.346.243-.348.984-.755 1.097-.294.484-.26 1.786-.366.912-.074 1.736-.198 1.832-.274.203-.163.235-.89.044-1.007-.072-.044-.2-.44-.287-.88a9.532 9.532 0 0 0-.41-1.429 6.53 6.53 0 0 1-.346-1.355c-.05-.4-.213-1.109-.362-1.574-.198-.623-.31-1.597-.422-3.67-.083-1.551-.21-3.04-.282-3.31-.071-.268-.198-1.587-.28-2.93-.083-1.343-.266-2.945-.408-3.559a20.056 20.056 0 0 1-.354-2.093c-.053-.538-.188-1.197-.302-1.466-.113-.268-.294-1.399-.402-2.512-.109-1.113-.258-2.243-.332-2.512-.196-.71-.282-4.672-.146-6.699.19-2.811.65-6.84.886-7.745.12-.461.28-1.34.355-1.954.075-.614.227-1.337.338-1.605.11-.269.247-.834.303-1.256.056-.422.215-.99.353-1.263a4.65 4.65 0 0 0 .352-1.046c.055-.304.248-.834.43-1.18.181-.344.33-.728.33-.853 0-.124.116-.376.259-.559a3.32 3.32 0 0 0 .425-.845c.092-.282.258-.588.37-.68.11-.092.203-.239.204-.325.001-.087.174-.42.384-.74.21-.32.57-.904.8-1.297.23-.393.544-.864.698-1.047.153-.182.436-.559.628-.837.814-1.178 1.445-1.997 2.026-2.629 1.568-1.705 1.723-1.961 1.862-3.079.073-.591.2-1.156.282-1.254.081-.098.214-.771.294-1.495.081-.724.267-1.694.412-2.154.146-.46.307-1.152.358-1.535a5.64 5.64 0 0 1 .345-1.275c.139-.317.297-.851.35-1.186.055-.336.185-.745.29-.91.104-.166.264-.606.354-.978.09-.371.28-.871.424-1.11.143-.24.26-.518.26-.618 0-.167.327-.91 1.198-2.718.186-.385.337-.767.337-.85 0-.083.12-.26.267-.392.146-.133.306-.4.355-.594.049-.194.211-.535.361-.758l.543-.804a6.39 6.39 0 0 0 .481-.907c.117-.28.268-.508.337-.508.07 0 .24-.25.378-.558.138-.307.293-.558.344-.558.05 0 .197-.22.325-.488.128-.27.293-.489.366-.489.072 0 .17-.12.217-.267.046-.147.268-.508.493-.802l.657-.865c.137-.181.412-.527.612-.768.2-.24.598-.752.886-1.136.826-1.102 1.526-1.869 3.92-4.293 2.293-2.321 3.095-3.058 4.329-3.98.388-.29.796-.604.907-.699a16.69 16.69 0 0 1 1.684-1.216c.254-.153.596-.373.76-.488.164-.115.48-.33.703-.476l.9-.593c.273-.18.562-.327.642-.327.08 0 .253-.12.386-.266.133-.147.41-.309.615-.36.205-.05.499-.206.653-.344.153-.138.51-.325.79-.415.283-.09.589-.255.68-.366a.599.599 0 0 1 .396-.203c.125 0 .604-.189 1.064-.418.46-.23.922-.418 1.025-.419.104 0 .357-.12.563-.267.207-.147.625-.313.93-.368.304-.055.772-.21 1.041-.344.269-.134.763-.29 1.098-.345a6.019 6.019 0 0 0 1.186-.355c.317-.14 1.049-.318 1.625-.398.576-.079 1.236-.235 1.465-.346.23-.111 1.29-.276 2.359-.367 1.067-.09 2.098-.224 2.29-.298.193-.073 1.958-.155 3.921-.183 3.695-.052 4.17-.102 4.757-.5.328-.222.638-.428 1.518-1.005.564-.371.746-.495 1.273-.87.27-.192.693-.456.942-.587.25-.131.454-.285.454-.341 0-.057.212-.173.472-.259.259-.086.583-.279.719-.43.136-.15.355-.273.486-.273.13 0 .47-.157.752-.35.283-.191.59-.348.682-.349.093 0 .389-.138.657-.306.483-.302 1.083-.553 2.442-1.021.384-.133.918-.35 1.187-.484.268-.134.799-.29 1.178-.345.38-.056.976-.213 1.326-.35.35-.136 1.013-.29 1.473-.343a12.92 12.92 0 0 0 1.745-.356 12.5 12.5 0 0 1 1.95-.354c.574-.05 1.296-.181 1.605-.29.309-.11 1.207-.291 1.996-.404.789-.114 1.56-.274 1.714-.356.153-.082 1.029-.237 1.946-.344.917-.108 1.779-.256 1.916-.33.137-.073 1.191-.235 2.342-.36 1.15-.126 2.23-.286 2.398-.356.169-.07 1.676-.227 3.35-.349 3.488-.254 3.67-.282 3.67-.562 0-.18.966-.207 7.467-.207 4.2-.51 8.513.585 10.777.767 1.476.118 2.858.281 3.07.362.214.082 1.136.241 2.05.354.915.114 1.772.265 1.906.336.133.072.856.229 1.605.35.75.12 1.476.28 1.613.353.138.073.771.232 1.408.353.636.12 1.228.279 1.316.351.087.073.613.227 1.169.343.555.116 1.177.297 1.38.402.205.106.62.239.923.296.304.057.867.25 1.252.429.384.18.825.327.978.328.154.001.467.126.696.277.23.15.683.314 1.008.363.325.049.724.204.886.344.162.14.493.299.736.351.244.053.662.209.93.346.27.138 1.651.827 3.071 1.531 1.42.705 2.833 1.432 3.14 1.616.307.185.823.463 1.146.619.323.156.62.337.66.401.04.065.498.381 1.018.703.52.32 1.227.8 1.573 1.066.345.265.786.56.98.654.194.095.476.285.628.423.238.215 1.156.949 2.62 2.095.508.397.958.789 2.278 1.981.595.538 1.274 1.146 1.51 1.353.755.665 4.97 4.696 7.068 6.762 1.12 1.102 2.08 2.003 2.135 2.003.054 0 .429.33.832.733.935.933 1.79 1.688 2.673 2.36.97.737 1.272.97 1.787 1.379.245.195.603.431.795.525.192.095.632.358.977.586.345.228.785.483.977.568.192.085.64.306.997.491s.761.336.898.336c.138 0 .505.122.817.27.312.15 1.101.37 1.754.492.652.122 1.532.289 1.954.371.925.18 2.927.062 3.698-.22a3.882 3.882 0 0 1 1.035-.209c.261-.003.732-.155 1.046-.337.314-.182.719-.377.9-.433 1.107-.342 4.616-3.313 5.253-4.449.165-.293.488-.206.742.2.098.156.246.83.33 1.497.084.667.237 1.38.34 1.585 1.385 4.367 1.028 8.437.417 12.887-.107.844-.293 1.755-.414 2.023-.12.269-.287.845-.37 1.28-.084.436-.239.864-.344.95-.105.088-.232.405-.283.705-.05.3-.212.7-.36.886-.147.187-.267.431-.267.542 0 .11-.187.477-.416.815-.23.338-.419.677-.422.754-.005.133-.604 1.088-1.052 1.674-.117.154-.397.53-.621.838-.936 1.28-1.218 1.638-1.816 2.297-1.315 1.452-1.233 1.208-1.4 4.211-.083 1.487-.207 2.891-.276 3.121-.068.23-.223 2.272-.343 4.536-.12 2.265-.278 4.337-.352 4.606-.129.47-.326 4.313-.492 9.56-.044 1.381-.138 2.731-.209 3-.104.392-.299 5.202-.594 14.654-.01.345.054 1.601.144 2.791.254 3.343.343 8.29.207 11.444-.068 1.574-.085 3.05-.039 3.28.081.4.126.423.987.517a88.78 88.78 0 0 1 4.46.586c.73.117 1.365.215 1.412.218.25.014 1.288 1.003 1.688 1.608l.46.696v9.5l-.523.786c-.442.666-.68.865-1.549 1.294-1.089.539-2.178 1.496-2.874 2.527-.611.906-1.215 2.515-1.332 3.552-.057.498-.194 1.126-.306 1.394-.11.269-.265 1.023-.341 1.675-.077.652-.254 1.532-.394 1.954-.139.422-.297 1.237-.352 1.812-.054.574-.191 1.265-.304 1.535-.114.27-.27 1.025-.346 1.677-.077.653-.254 1.532-.393 1.954-.14.422-.298 1.236-.352 1.808-.054.572-.187 1.212-.296 1.422-.108.21-.285.998-.394 1.751-.108.753-.29 1.589-.403 1.857-.114.269-.253.834-.31 1.256-.055.423-.188.938-.294 1.145-.106.207-.262.71-.346 1.116-.085.407-.242.88-.35 1.05-.108.17-.266.637-.352 1.036a6.257 6.257 0 0 1-.487 1.35c-.183.344-.333.734-.333.866a.623.623 0 0 1-.208.415c-.114.095-.276.425-.36.733-.133.499-.289.804-.94 1.85-.095.153-.3.53-.455.837-.155.307-.626 1.029-1.046 1.605a79.5 79.5 0 0 0-1 1.395c-.247.364-2.944 3.043-3.624 3.6-.818.67-1.48 1.145-1.597 1.145-.066 0-.232.11-.369.245-.136.134-.466.356-.732.493-.267.137-.95.498-1.517.802-.568.305-1.14.554-1.272.554-.132 0-.39.115-.573.257-.183.141-.637.332-1.008.424-.372.091-.812.254-.977.36-.166.107-.707.267-1.202.356-.496.088-1.068.247-1.272.352-.204.106-.929.258-1.611.34-.682.081-1.46.241-1.729.356-.748.32-5.86.664-9.839.664-5.037 0-10.548-.351-11.653-.742-.192-.068-1.227-.194-2.301-.28-1.074-.087-2.17-.249-2.438-.36-.267-.112-.956-.269-1.53-.349-.574-.08-1.267-.258-1.54-.396a4.629 4.629 0 0 0-1.106-.353c-.336-.056-.807-.214-1.047-.352a3.77 3.77 0 0 0-.924-.352c-.269-.056-.633-.214-.809-.353a2.14 2.14 0 0 0-.723-.34c-.221-.048-.475-.175-.563-.28-.088-.107-.39-.268-.672-.36-.282-.09-.616-.266-.743-.39s-.557-.414-.956-.645c-2.319-1.34-5.547-4.312-7.79-7.176a11.704 11.704 0 0 0-.657-.767 2.969 2.969 0 0 1-.454-.64c-.093-.191-.388-.631-.656-.977a8.682 8.682 0 0 1-.698-1.046c-.117-.23-.4-.702-.63-1.047a11.228 11.228 0 0 1-.685-1.206c-.148-.317-.333-.617-.41-.665-.078-.047-.218-.321-.311-.608-.094-.287-.282-.666-.42-.842a2.158 2.158 0 0 1-.337-.723c-.049-.221-.178-.477-.288-.568-.11-.091-.268-.425-.353-.742-.084-.318-.234-.671-.332-.787-.098-.115-.258-.455-.354-.756-.097-.3-.287-.74-.422-.977a4.4 4.4 0 0 1-.347-.779 1.78 1.78 0 0 0-.28-.558c-.1-.115-.255-.49-.347-.832-.09-.343-.285-.775-.431-.961-.146-.186-.266-.465-.266-.62 0-.154-.157-.616-.349-1.027-.846-1.812-1.021-2.242-1.105-2.721-.049-.28-.176-.582-.282-.67-.106-.089-.267-.469-.357-.845-.09-.376-.25-.754-.354-.84-.104-.087-.26-.498-.346-.913-.086-.414-.213-.789-.282-.832-.07-.043-.256-.512-.414-1.043-.158-.531-.342-1-.409-1.041-.067-.041-.196-.386-.287-.766-.091-.38-.255-.765-.363-.855-.108-.09-.197-.235-.197-.323 0-.19-.933-2.074-1.32-2.668-.774-1.185-2.411-2.573-3.482-2.95-.3-.106-.64-.271-.755-.366-.293-.243-5.06-.243-5.354 0-.115.095-.455.26-.757.366-1.363.481-3.047 2.062-3.985 3.742a4.39 4.39 0 0 1-.442.649 1.697 1.697 0 0 0-.306.612c-.052.208-.182.451-.29.54-.106.089-.263.421-.347.738-.085.318-.234.671-.333.787-.098.115-.258.46-.355.767-.098.307-.264.684-.37.837-.107.154-.26.53-.342.838-.082.307-.23.652-.328.767-.099.116-.26.461-.357.768-.098.307-.256.684-.351.837-.095.154-.252.53-.348.838-.096.307-.262.684-.368.837-.106.154-.26.53-.342.837-.082.307-.231.653-.332.768-.101.115-.258.492-.35.837-.09.346-.247.723-.348.838-.101.115-.254.473-.34.796-.086.323-.212.622-.281.665-.069.042-.232.406-.363.808-.131.402-.317.826-.414.94-.097.116-.219.411-.27.657a2.244 2.244 0 0 1-.352.772c-.14.18-.325.583-.41.898-.085.315-.242.645-.349.733-.107.09-.235.326-.285.525-.102.407-.867 1.98-1.48 3.045-.221.384-.508.933-.637 1.22-.129.289-.286.524-.35.524-.062 0-.219.204-.346.454-.128.25-.507.815-.841 1.257-.335.443-.609.844-.609.892 0 .047-.141.23-.314.404a9.856 9.856 0 0 0-.663.772c-.846 1.103-3.103 3.399-4.4 4.476l-.817.677c-.139.115-.405.35-.591.52a3.944 3.944 0 0 1-.64.473 3.744 3.744 0 0 0-.451.28c-.624.5-1.5 1.1-1.605 1.1-.071 0-.216.087-.322.193-.184.184-.758.524-1.912 1.132a6.349 6.349 0 0 0-.722.434c-.106.085-.409.227-.673.316-.263.088-.577.249-.697.356-.12.107-.478.263-.796.348-.317.084-.649.24-.737.347-.089.107-.394.237-.68.289-.285.052-.669.192-.854.31-.184.12-.704.303-1.155.408-.45.106-.959.281-1.13.39-.17.11-.624.242-1.008.294-.383.052-.934.213-1.223.359-.29.146-.886.302-1.326.349-.44.046-1.268.21-1.84.365-.979.264-3.225.539-6.566.802-2.949.233-3.854.262-4.605.15zm115.836-3.196c2.316-.086 3.666-.196 4.186-.342.423-.12 1.415-.283 2.206-.365.79-.082 1.607-.234 1.814-.34.207-.105.781-.26 1.276-.346.92-.16 1.914-.501 3.15-1.085.385-.182.805-.331.934-.331.128 0 .275-.066.325-.147.05-.08.414-.3.81-.489a14.231 14.231 0 0 0 2.274-1.353c.297-.211.76-.534 1.028-.717.269-.183 1.077-.952 1.796-1.71 1.848-1.946 1.833-1.928 1.833-2.092 0-.081.134-.267.298-.413.164-.147.389-.455.5-.685.11-.23.38-.733.6-1.116a17.8 17.8 0 0 0 .56-1.047c.088-.192.303-.632.479-.977.175-.346.363-.873.416-1.172.054-.299.183-.676.287-.837.104-.162.259-.702.344-1.201.086-.499.247-1.142.358-1.43.111-.287.265-1.08.342-1.76.077-.681.233-1.459.345-1.729.113-.27.277-1.362.365-2.426.088-1.065.25-2.154.36-2.421.137-.331.246-1.51.342-3.699.079-1.793.23-3.586.343-4.059.282-1.187.286-7.631.004-8.719-.109-.42-.238-1.359-.288-2.088-.055-.806-.219-1.708-.42-2.303-.181-.537-.367-1.206-.414-1.486-.046-.28-.175-.585-.286-.677-.111-.092-.241-.377-.29-.634-.048-.256-.238-.67-.422-.92s-.335-.527-.335-.616c0-.089-.141-.322-.314-.52a15.308 15.308 0 0 1-.733-.938c-.4-.556-1.6-1.737-2.315-2.279-1.39-1.053-2.43-1.769-2.572-1.769-.093 0-.324-.121-.513-.27a2.316 2.316 0 0 0-.751-.367 3.561 3.561 0 0 1-.827-.346 3.475 3.475 0 0 0-.976-.348 5.958 5.958 0 0 1-1.145-.361c-.323-.144-1.061-.328-1.641-.409-.58-.08-1.269-.236-1.53-.345-.262-.11-1.219-.268-2.127-.352-.909-.083-1.935-.238-2.28-.343-.345-.104-1.758-.265-3.14-.357-1.382-.091-2.612-.218-2.734-.28-.365-.189-6.412-.548-9.215-.548-3.2 0-6.609.22-7.724.5-.458.114-1.718.297-2.8.405-1.08.109-2.142.265-2.358.347-.216.082-.997.211-1.737.287-.74.076-1.815.257-2.39.402-.577.145-1.424.305-1.885.356-.46.05-1.183.206-1.605.346-.422.14-1.144.3-1.605.355-.46.056-1.011.191-1.224.302-.213.11-.747.265-1.187.345-.44.08-.938.234-1.109.344-.17.11-.622.266-1.002.348-.381.081-.768.238-.859.348-.091.11-.234.2-.318.2-.084 0-.657.254-1.274.565-1.02.514-1.46.776-2.674 1.587-.562.376-3.123 3.015-3.123 3.22 0 .091-.11.268-.244.391s-.457.651-.716 1.173c-.26.522-.59 1.181-.733 1.465-.143.284-.26.63-.26.768s-.164.91-.364 1.716c-.346 1.393-.361 1.609-.308 4.348.038 1.93.111 2.948.221 3.08.09.11.232.822.313 1.584.082.762.268 1.794.413 2.293.146.499.306 1.292.356 1.763.05.472.18 1.03.29 1.24.109.212.268.831.352 1.377.084.546.264 1.213.399 1.481.134.269.29.801.346 1.183.056.382.213.916.349 1.187.135.27.292.74.347 1.042.055.303.22.704.367.891.148.187.268.48.268.65 0 .17.147.585.326.923.179.338.371.797.427 1.022.056.224.223.562.372.751.149.19.27.452.27.585 0 .132.158.472.35.755.191.282.35.59.351.682.001.093.174.426.384.74.21.315.538.838.73 1.163.192.325.49.767.663.983.173.216.314.454.314.528 0 .074.186.38.414.678l.663.874c.137.182.421.521.632.753.212.232.384.467.384.523 0 .345 4.885 4.934 6.28 5.9.192.132.595.413.896.623.797.559 1.469.964 2.14 1.292.326.16.593.345.593.412s.236.198.523.29c.288.093.621.253.74.356.119.104.482.282.807.397.326.115.729.305.897.422.168.118.403.214.524.214.12 0 .467.128.771.285.304.157.867.352 1.25.433.384.08.841.238 1.016.348.174.11.677.265 1.116.343.44.078 1.113.258 1.497.401.384.143 1.232.326 1.884.407a24.9 24.9 0 0 1 2.094.358c.57.132 1.686.217 3 .227 1.152.01 2.44.068 2.861.13a9.84 9.84 0 0 0 1.675.058 309.7 309.7 0 0 1 4.326-.181zm-107.902-.274c.18-.102.949-.274 1.71-.38.76-.107 1.555-.282 1.766-.389.21-.107.784-.264 1.275-.349.49-.084 1.03-.245 1.2-.356.17-.112.555-.246.854-.299.299-.052.746-.21.993-.352a3.62 3.62 0 0 1 .937-.348c.268-.05.558-.176.644-.28.086-.103.488-.284.894-.402.405-.118.816-.31.912-.425.096-.116.232-.211.302-.211.176 0 .918-.356 1.583-.76a40.77 40.77 0 0 1 1.102-.64 7.09 7.09 0 0 0 .697-.428c.298-.244 1.615-1.103 1.692-1.103.132 0 3.223-2.472 3.926-3.14 1.53-1.453 2.891-2.82 3.47-3.483.383-.44.822-.942.976-1.117.558-.636.81-.967 1.079-1.424.15-.256.327-.465.39-.465.065 0 .155-.119.2-.264.047-.145.224-.421.394-.614.17-.192.498-.675.728-1.074.23-.398.49-.8.577-.895.156-.17.574-.899 1.078-1.882.142-.278.338-.6.435-.714.098-.115.252-.44.342-.722.09-.282.251-.584.358-.672.106-.089.234-.36.285-.605a2.79 2.79 0 0 1 .3-.77c.193-.305.355-.722.958-2.465.132-.384.353-.956.49-1.27.136-.316.293-.881.347-1.257.055-.375.188-.856.295-1.067.107-.211.289-1.01.403-1.777.115-.767.273-1.563.352-1.77.412-1.083.517-9.287.137-10.653-.075-.268-.236-.865-.357-1.326-.122-.46-.344-1.065-.494-1.344-.15-.28-.272-.585-.272-.68 0-.465-1.685-2.716-2.872-3.837-.782-.739-2.131-1.798-3.06-2.404-.774-.504-3.69-1.992-3.906-1.992-.097 0-.251-.09-.343-.2-.091-.11-.36-.244-.598-.296-.238-.052-.714-.245-1.058-.428-.344-.183-.727-.332-.851-.332s-.445-.117-.712-.26c-.268-.144-.828-.334-1.245-.423-.417-.09-.834-.226-.926-.303-.093-.076-.623-.234-1.179-.35-.555-.116-1.175-.296-1.376-.4-.202-.104-.743-.232-1.204-.284a10.602 10.602 0 0 1-1.674-.362c-1.077-.343-5.85-.975-9.35-1.238-4.797-.36-8.515-.463-11.105-.308-1.415.084-4.394.25-6.62.366-2.746.145-4.451.3-5.303.483a23.45 23.45 0 0 1-2.177.357c-.506.048-1.102.183-1.325.3-.223.117-.776.273-1.23.346-.452.074-.979.257-1.17.407-.19.15-.473.273-.627.273-.472 0-2.94 1.304-4.455 2.353-1.005.697-2.91 2.506-3.4 3.23-.18.268-.52.756-.752 1.084-.233.328-.55.83-.704 1.117l-.398.73c-.504.915-1.166 2.609-1.445 3.698a38.17 38.17 0 0 1-.42 1.446c-.152.489-.337 1.588-.41 2.442-.074.855-.237 1.806-.364 2.113-.198.478-.238 1.346-.284 6.06-.052 5.307.04 7.166.395 8.015.069.165.19.977.268 1.805.078.829.212 1.637.298 1.798.085.16.242.786.348 1.39.105.606.28 1.273.387 1.483.107.21.268.727.357 1.149.09.42.25.898.356 1.06.107.163.237.54.29.84.052.299.236.795.408 1.102.173.307.358.742.412.966.054.224.22.562.369.751.148.19.27.442.27.562 0 .12.168.473.373.784.919 1.393 1.023 1.566 1.023 1.7 0 .079.157.29.349.47.191.18.348.41.348.512 0 .101.126.262.28.358.153.096.279.23.279.297 0 .305 2.92 3.341 3.978 4.137.357.268.752.598.879.732.126.135.304.245.397.245.092 0 .345.148.562.329.217.181.583.433.813.56.432.238.61.343 1.497.886.286.175.596.318.689.318.092 0 .423.122.735.27.682.324 2.032.811 2.8 1.01.308.08 1.061.292 1.676.47.614.179 1.65.394 2.302.48.653.084 1.626.242 2.163.349 1.377.275 13.79.237 14.284-.044zm54.869-57.99c1.496-.122 3.098-.29 3.558-.374a64.995 64.995 0 0 1 1.815-.296 40.032 40.032 0 0 0 1.954-.348c.537-.112 1.626-.323 2.42-.469.794-.146 1.52-.328 1.613-.405.093-.078.636-.212 1.208-.3.571-.086 1.227-.245 1.458-.352.23-.107.94-.285 1.578-.395.638-.111 1.24-.268 1.337-.348.096-.08.83-.24 1.63-.356.8-.116 1.707-.3 2.014-.408.307-.109 1.06-.243 1.675-.299.614-.056 1.282-.186 1.485-.289.202-.103 1.113-.258 2.023-.343.91-.086 1.936-.246 2.278-.355.343-.11 1.804-.295 3.248-.411 1.444-.117 2.776-.27 2.96-.34 1.692-.643 26.474-.633 27.897.011.34.154 5.083.534 5.375.43.103-.036.313-.355.466-.709.264-.608.283-1.035.345-7.97.063-6.962.003-8.974-.358-12.141a131.53 131.53 0 0 1-.296-3.067c-.088-1.034-.215-1.984-.284-2.112-.068-.127-.218-.992-.333-1.922-.115-.93-.299-1.863-.408-2.075-.11-.211-.243-.76-.296-1.221-.054-.46-.208-1.057-.343-1.326-.134-.269-.29-.803-.346-1.186-.056-.384-.213-.89-.35-1.125a3.665 3.665 0 0 1-.35-.977 3.444 3.444 0 0 0-.356-.969 4.655 4.655 0 0 1-.412-1.011c-.087-.327-.213-.594-.28-.594-.068 0-.228-.314-.356-.697-.127-.384-.28-.698-.338-.698-.06 0-.21-.236-.337-.524a8.603 8.603 0 0 0-.614-1.097l-.792-1.187c-.512-.77-2.738-2.996-3.57-3.57-.956-.66-3.628-1.951-4.257-2.058a12.208 12.208 0 0 1-1.424-.381c-.789-.262-1.107-.282-3.628-.222-2.065.05-2.887.12-3.252.28-.269.118-.834.26-1.256.315-.422.056-1.019.213-1.326.35-.307.136-.84.292-1.186.347-.346.055-.817.213-1.047.35-.23.137-.701.294-1.047.349-.345.055-.816.212-1.046.349-.23.137-.702.294-1.047.349-.346.054-.817.211-1.047.349-.23.137-.701.294-1.047.349-.345.054-.816.211-1.046.349-.23.137-.702.294-1.047.348-.345.055-.816.212-1.047.35-.23.137-.7.294-1.046.348-.346.055-.817.212-1.047.35-.23.136-.701.293-1.047.348-.345.055-.816.21-1.046.347-.23.137-.732.293-1.114.348-.382.054-.915.211-1.186.348-.27.137-.824.319-1.231.405-.407.086-.91.242-1.117.347-.207.104-.65.232-.983.283a4.516 4.516 0 0 0-1.116.349c-.28.14-.85.3-1.265.353-.415.053-.929.186-1.141.296-.213.11-1.031.297-1.818.415-.787.119-1.509.28-1.604.359-.236.196-4.516.674-7.24.809-3.395.168-9.793-.3-12.005-.876-.46-.12-1.304-.284-1.873-.364-.57-.08-1.11-.206-1.2-.281-.09-.075-.72-.233-1.4-.352-.678-.118-1.309-.277-1.4-.353-.092-.076-.598-.228-1.124-.338-.905-.188-1.972-.501-3.4-.997-.346-.12-.98-.298-1.409-.396-.43-.098-.932-.277-1.116-.398-.185-.121-.62-.263-.964-.315-.346-.052-.817-.203-1.047-.337-.23-.133-.727-.317-1.104-.408-.377-.092-.815-.257-.973-.368-.158-.111-.418-.202-.576-.202-.159 0-.538-.129-.842-.286a7.773 7.773 0 0 0-1.25-.478 7.614 7.614 0 0 1-1.25-.482c-.305-.159-.682-.29-.838-.29-.157 0-.473-.126-.703-.278-.23-.153-.545-.278-.698-.279-.154 0-.656-.19-1.117-.419-.46-.23-.95-.418-1.089-.418-.138 0-.483-.12-.767-.266-.738-.379-1.945-.855-2.703-1.066-.358-.1-.797-.276-.976-.392-.18-.115-.577-.253-.885-.307a3.472 3.472 0 0 1-.976-.344c-.23-.136-.702-.292-1.047-.346-.346-.054-.768-.186-.94-.295-.17-.108-.755-.29-1.3-.405-.543-.115-1.116-.277-1.273-.36-.156-.084-.7-.211-1.21-.283a26.986 26.986 0 0 1-2.082-.411c-2.127-.514-10.509-.51-11.472.006-.162.086-.87.25-1.572.364-.703.113-1.356.272-1.453.352-.096.08-.54.231-.985.337-.446.106-1.06.32-1.363.478-.304.157-.658.286-.786.286a.603.603 0 0 0-.4.202c-.092.111-.398.276-.68.367-.282.09-.606.243-.722.339a4.76 4.76 0 0 1-.697.42c-.269.135-.52.291-.559.346-.038.056-.277.207-.53.337a3.98 3.98 0 0 0-.719.473c-.142.13-.488.394-.769.586-.911.622-2.499 1.964-3.285 2.776-1.626 1.681-2.93 3.238-2.93 3.499 0 .072-.086.181-.191.243-.105.061-.296.3-.425.53-.128.23-.39.638-.579.907-.417.59-.49.7-1.11 1.67-.268.42-.487.835-.487.923 0 .088-.116.31-.259.493a3.342 3.342 0 0 0-.425.845c-.092.282-.258.588-.37.68a.599.599 0 0 0-.202.395c0 .125-.189.604-.419 1.065-.23.46-.417.964-.418 1.118 0 .155-.121.508-.27.784-.148.276-.31.746-.36 1.045a6.776 6.776 0 0 1-.343 1.17c-.14.345-.296.973-.347 1.396a13.178 13.178 0 0 1-.355 1.674c-.164.57-.318 1.813-.415 3.35-.085 1.343-.222 2.85-.304 3.35a7.311 7.311 0 0 0-.048 1.744c.132 1.104.135 14.07.003 15.448-.1 1.04-.092 1.084.269 1.445.303.303.454.356.817.285.797-.156 3.173-.34 6.377-.497 1.727-.084 3.422-.21 3.768-.283.982-.204 9.124-.303 12.141-.148 4.361.224 9.485.667 10.467.905.5.12 1.724.283 2.722.361.998.078 2.034.23 2.303.339.268.108 1.179.26 2.023.34.845.078 1.755.233 2.024.344.269.111 1.085.266 1.814.345.73.079 1.508.239 1.732.355.223.117.82.252 1.325.301.507.05 1.266.204 1.688.344.422.14 1.214.322 1.76.406.546.083 1.17.244 1.386.356.217.112.744.247 1.171.3a7.032 7.032 0 0 1 1.41.341c.349.136 1.008.293 1.466.348a9.46 9.46 0 0 1 1.39.277c.832.264 1.12.316 2.72.49.805.087 1.528.208 1.605.27.176.139 2.63.388 5.026.509.998.05 1.908.146 2.023.211.319.182 7.113.045 10.188-.205z"
    />
    <text
      className="loading-text"
      transform="translate(100 64.47)"
      fill="url(#a)"
      fontSize={42}
    >
      {""}
    </text>
  </svg>
);
export default SVGComponent;
