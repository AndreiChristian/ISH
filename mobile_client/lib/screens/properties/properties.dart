import 'package:flutter/material.dart';

class PropertiesScreen extends StatefulWidget {
  const PropertiesScreen({super.key});

  @override
  State<PropertiesScreen> createState() => _PropertiesScreenState();
}

class _PropertiesScreenState extends State<PropertiesScreen> {
  final PageController _controller = PageController(viewportFraction: 0.7);

  int _selectedCard = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.5,
            child: PageView.builder(
              controller: _controller,
              itemCount: 10,
              onPageChanged: (value) {
                setState(() {
                  _selectedCard = value;
                });
              },
              itemBuilder: (context, index) {
                return Container(
                  margin: const EdgeInsets.symmetric(horizontal: 20),
                  child: ColoredBox(
                    color: Colors.amber,
                    child: CardWidget(index: index),
                  ),
                );
              },
            ),
          ),
          Text(
            "Property $_selectedCard",
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ],
      ),
    );
  }
}

class CardWidget extends StatelessWidget {
  const CardWidget({super.key, required this.index});

  final int index;
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth > 600) {
          return Center(
            child: Text('Card $index', style: TextStyle(fontSize: 32)),
          );
        } else {
          return Center(
            child: Text('Card $index', style: TextStyle(fontSize: 24)),
          );
        }
      },
    );
  }
}
