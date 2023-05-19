import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class HomeList extends StatelessWidget {
  const HomeList({super.key});

  @override
  Widget build(BuildContext context) {
    final PageController controller = PageController();

    return PageView(
      controller: controller,
      children: const [
        Center(child: Text("0")),
        Center(child: Text("1")),
        Center(child: Text("2")),
        Center(child: Text("3")),
      ],
    );
  }
}
