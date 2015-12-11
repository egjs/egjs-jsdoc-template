# egjs-jsdoc-template

## 개요
jsdoc3 기반의 템플릿 중 [jaguar-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc) 템플릿의 기능을 기반으로 한 jsdoc template 개발 프로젝트이다.

> jsdoc template 은 jsdoc 에서 주석을 파싱한 결과물을 기반으로 UI 를 구성하는 모듈을 의미한다. 원하는 UI 를 적용하고 싶은 경우 템플릿 구현이 필요하다. 
>
> publish.js 에서 exports 된 ```publish``` 함수가 template 진입점이며, jsdoc 에서 파싱된 데이터(TAFFY type)를 파라미터로 전달 받는다.

## 목적
  1. 기능 및 UI 를 egjs API 문서를 표현하는데 보다 최적화된 형태로 변경한다.
  2. jsdoc3 기반으로 문서 API 를 작성하고자 하는 사내 모든 분들 중 egjs 와 동일하거나 유사한 기능이 필요한 분들을 위한 레퍼런스가 된다.

## 주요 특징
jaguar-jsdoc 과 구분되는 egjs-jsdoc-template 의 기능은 다음과 같다.

  1. 네비게이션 메뉴 Grouping 기능 : 동일한 범주끼리 묶어서 보여준다.
    * 지정된 그룹이 하나도 없으면 grouping 되지 않음
    * 그룹이 지정되지 않은 대상은 Global (기본 그룹명)으로 그룹핑
    * 알파벳 순서로 정렬 (단, Global 은 제일 마지막 순서)
  2. Parameter Style : 테이블 --> 리스트 형태(기존 Jindo API 문서나 jQuery 문서 형태)
  3. 네비게이션 메뉴 API 위치 고정 : 현재 클릭 시 해당 API 가 메뉴 최상단으로 이동(jaguar-jsdoc)하지 않고, 지정된 위치에 고정된다.
  4. 한국어 처리 : 주석의 기본은 영문으로 하며 <ko> 태그를 이용하여 한글 주석을 표기한다.

## Project Setting
grunt-cli 를 각자 global로 설치 후, 다음 명령어를 이용하여 프로젝트를 설정한다.
```
git clone http://사용자아이디@yobi.navercorp.com/Front-End/egjs-jsdoc-template
cd egjs-jsdoc-template
npm install
```

## 문서 생성하기
grunt의 build 를 실행하여, 문서를 생성한다.
```
grunt
```
- 실행이 정상적으로 완료되면 `demo/dist` 디렉토리에 샘플 문서가 생성된다.

> Gruntfile.js 의 작업원본 JS 파일 경로(SRC_PATH), 와 결과물 경로 (DEST_PATH)를 지정할 수 있다. 
>
> var DIST_PATH = 'demo/dist';
  var SRC_PATH = 'demo/sample';

[![Analytics](https://ga-beacon.appspot.com/UA-70842526-6/egjs-jsdoc-template/readme)](https://github.com/egjs/egjs-jsdoc-template)
