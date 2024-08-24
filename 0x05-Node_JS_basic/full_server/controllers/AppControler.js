/**
 * getHomepage accepts `request` and `response` as argument
 * returns 200 status and a message
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School');
  }
}
export default AppController;
