import 'package:shared_preferences/shared_preferences.dart';

class LocalStorageRepository {
  void setToken(String token) async {
    SharedPreferences prefernces = await SharedPreferences.getInstance();
    prefernces.setString('x-auth-token', token);
  }

  Future<String?> getToken() async {
    SharedPreferences prefernces = await SharedPreferences.getInstance();
    String? token =  prefernces.getString('x-auth-token');
    return token;
  }
}
