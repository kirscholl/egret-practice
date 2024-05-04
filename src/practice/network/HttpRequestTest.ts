class HttpRequestTest extends egret.DisplayObjectContainer {

  private testHttpUrl = "http://httpbin.org/get";

  constructor() {
    super();
  }

  private httpRequest() {
    const request = new egret.HttpRequest();
    request.responseType = egret.HttpResponseType.TEXT;
    request.open(this.testHttpUrl, egret.HttpMethod.GET);
    request.setRequestHeader("ContentType", "application/x-www-form-urlencoded");
    request.send();
  }
}