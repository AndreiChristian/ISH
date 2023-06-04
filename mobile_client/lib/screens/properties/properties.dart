import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PropertiesScreen extends StatefulWidget {
  const PropertiesScreen({Key? key}) : super(key: key);

  @override
  State<PropertiesScreen> createState() => _PropertiesScreenState();
}

class _PropertiesScreenState extends State<PropertiesScreen> {
  final PageController _controller = PageController(viewportFraction: 0.7);
  Future<List>? _propertyListFuture;
  int _selectedCard = 0;
  String _selectedCardName = "";
  String _selectedCardImageUrl = "";

  @override
  void initState() {
    super.initState();
    _propertyListFuture = fetchData();
  }

  Future<List> fetchData() async {
    try {
      final response =
          await http.get(Uri.parse('http://10.0.2.2:3000/api/property'));

      if (response.statusCode == 200) {
        List<dynamic> list = json.decode(response.body);
        return list;
      } else {
        throw Exception('Failed to load property');
      }
    } catch (e) {
      rethrow;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      ),
      body: FutureBuilder<List>(
        future: _propertyListFuture,
        builder: (BuildContext context, AsyncSnapshot<List> snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          } else if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          } else {
            return Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                SizedBox(
                  height: MediaQuery.of(context).size.height * 0.5,
                  child: PageView.builder(
                    controller: _controller,
                    itemCount: snapshot.data!.length,
                    onPageChanged: (value) {
                      setState(() {
                        _selectedCard = value;
                        _selectedCardName = snapshot.data![value]['name'];
                        _selectedCardImageUrl =
                            snapshot.data![value]['image_url'];
                      });
                    },
                    itemBuilder: (context, index) {
                      var property = snapshot.data![index];
                      return Container(
                        margin: const EdgeInsets.symmetric(horizontal: 20),
                        child: CardWidget(
                            index: index, imageUrl: property['image_url']),
                      );
                    },
                  ),
                ),
                Text(
                  _selectedCardName.toString(),
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
              ],
            );
          }
        },
      ),
    );
  }
}

class CardWidget extends StatelessWidget {
  final int index;
  final String imageUrl;

  const CardWidget({Key? key, required this.index, required this.imageUrl})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return Center(
          child: Image.network(imageUrl),
        );
      },
    );
  }
}
