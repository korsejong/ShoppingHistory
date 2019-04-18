# ShoppingHistory
> 임의의 쇼핑 데이터를 등록하고 등록한 쇼핑 데이터를 분석할 수 있는 사이트입니다.

### Demo
![demo](https://github.com/korsejong/ShoppingHistory/blob/master/ex.png)

### Repo Structure
* `config/` - express(라우터, 컨트롤러), mongodb(데이터베이스)에 대한 설정이 있습니다.
* `controllers/` - API를 제공하기 위한 컨트롤러가 등록되어 있습니다.
* `service/` - 서비스 로직이 등록되어 있습니다.
* `routes/` - 페이지를 제공하기 위한 라우터가 등록되어 있습니다.
* `models/` - 데이터베이스에 등록되는 모델의 스키마(Mongoose)가 정의되어 있습니다.
* `utils/` - 유틸리티 모듈(ex file upload)이 등록되어 있습니다.
* `views/` - 사용자에게 보여지는 웹 페이지(Server side rendering: Pug)가 등록되어 있습니다.
* `public/javascripts/` - 사용자에게 보여지는 웹 페이지의 Javascript 파일이 등록되어 있습니다.
* `public/stylesheets/` - 사용자에게 보여지는 웹 페이지의 CSS 파일이 등록되어 있습니다.
* `public/tmp/uploads` - 업로드된 파일이 저장되는 공간입니다.
* `test/` - 테스트 파일이 등록되어 있습니다. (Mocha, events, node-mocks-http, should)

### NPM Modules
* `"cookie-parser": "~1.4.3"`
* `"debug": "~2.6.9"`
* `"express": "~4.16.0"`
* `"http-errors": "~1.6.2"`
* `"mongoose": "^5.4.20"`
* `"morgan": "~1.9.0"`
* `"multer": "^1.4.1"`
* `"pug": "^2.0.3"`
* `"swagger-jsdoc": "^3.2.8"`
* `"swagger-ui-express": "^4.0.2"`
* `"uuid": "^3.3.2"`

### Installation and Settings
#### Build requirements
* `Node.js 10.x+`
* `MongoDB 4.0+`

#### Installation
```
git clone https://github.com/korsejong/ShoppingHistory.git
npm install
sudo service mongod start
npm start
```

#### Testing
```
git clone https://github.com/korsejong/ShoppingHistory.git
npm install
sudo service mongod start
npm test
```

#### API DOCS
``` 
swagger-jsdoc, swagger-ui-express 사용
/api-docs 에서 확인하실 수 있습니다.
```
