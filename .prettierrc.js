module.exports = {
  printWidth: 100, // 줄 바꿈 할 폭 길이
	useTabs: true, // 탭 사용 여부
	tabWidth: 2, // 탭 너비
	trailingComma: 'es5', //  여러 줄을 사용시, 후행 콤마 사용 방식
	semi: true, // 세미콜론 사용 여부
	arrowParens: 'always', // 화살표 함수 괄호 사용 방식 (always 는 항상 괄호 표시)
	singleQuote: true, // single 쿼테이션 사용 여부
	bracketSameLine: false, // jsx의 브라켓이 라인을 맞출 것인지
	quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
	endOfLine: 'lf', // EoF 방식, OS별로 처리 방식이 다름(\n \r \r\n 처리방식에 관한 내용)
	bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
	jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
	jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
	proseWrap: 'preserve', // markdown 텍스트의 줄바꿈 방식
	vueIndentScriptAndStyle: false, // Vue 파일의 script와 style 태그의 들여쓰기 여부
	htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정 https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
	parser: 'typescript', // 사용할 parser를 지정, 기본적으로는 자동으로 지정됨
	filepath: '', // parser를 유추할 수 있는 파일을 지정
	rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
	rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
	requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정
	insertPragma: false, // 미리 정의된 @format marker의 사용 여부
	overrides: [], // 특정 파일에 대해 다른 규칙을 적용
	embeddedLanguageFormatting: 'auto', // 인용된 코드에 대한 포매팅 여부
};