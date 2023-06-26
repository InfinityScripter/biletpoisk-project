"use client";

import { useState } from "react";
import classNames from "classnames";

import styles from "./page.module.css";
import Accordion from "@/components/accordion";

const questions = [
  {
    id: 1,
    title: "Что такое Билетопоиск?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus rutrum odio id laoreet. Integer feugiat, ante non fringilla facilisis, nisl nulla interdum mauris, vitae iaculis nunc justo at erat. Sed elementum eros nec velit suscipit, sed fringilla sapien vestibulum. Mauris consectetur, urna eu fermentum finibus, erat elit scelerisque nisl, vel consequat purus diam a arcu. In pharetra tristique sapien, sit amet consectetur nunc euismod eget. Sed sit amet massa ultricies, luctus dui eget, feugiat massa. Proin aliquet, turpis in venenatis gravida, justo nibh tristique sapien, id tincidunt lacus odio et est. Fusce et turpis malesuada, tristique justo a, mattis sem. Phasellus consequat dolor ac tincidunt placerat. Vivamus interdum ante a arcu scelerisque, in fringilla elit pretium. Sed venenatis viverra purus, at malesuada nibh bibendum ut. Sed id arcu lacus. Aliquam varius diam neque, nec feugiat tortor volutpat a. Nulla facilisi.",
  },
  {
    id: 2,
    title: "Какой компании принадлежит Билетопоиск?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus rutrum odio id laoreet. Integer feugiat, ante non fringilla facilisis, nisl nulla interdum mauris, vitae iaculis nunc justo at erat. Sed elementum eros nec velit suscipit, sed fringilla sapien vestibulum. Mauris consectetur, urna eu fermentum finibus, erat elit scelerisque nisl, vel consequat purus diam a arcu. In pharetra tristique sapien, sit amet consectetur nunc euismod eget. Sed sit amet massa ultricies, luctus dui eget, feugiat massa. Proin aliquet, turpis in venenatis gravida, justo nibh tristique sapien, id tincidunt lacus odio et est. Fusce et turpis malesuada, tristique justo a, mattis sem. Phasellus consequat dolor ac tincidunt placerat. Vivamus interdum ante a arcu scelerisque, in fringilla elit pretium. Sed venenatis viverra purus, at malesuada nibh bibendum ut. Sed id arcu lacus. Aliquam varius diam neque, nec feugiat tortor volutpat a. Nulla facilisi.",
  },
  {
    id: 3,
    title: "Как купить билет на Билетопоиск?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus rutrum odio id laoreet. Integer feugiat, ante non fringilla facilisis, nisl nulla interdum mauris, vitae iaculis nunc justo at erat. Sed elementum eros nec velit suscipit, sed fringilla sapien vestibulum. Mauris consectetur, urna eu fermentum finibus, erat elit scelerisque nisl, vel consequat purus diam a arcu. In pharetra tristique sapien, sit amet consectetur nunc euismod eget. Sed sit amet massa ultricies, luctus dui eget, feugiat massa. Proin aliquet, turpis in venenatis gravida, justo nibh tristique sapien, id tincidunt lacus odio et est. Fusce et turpis malesuada, tristique justo a, mattis sem. Phasellus consequat dolor ac tincidunt placerat. Vivamus interdum ante a arcu scelerisque, in fringilla elit pretium. Sed venenatis viverra purus, at malesuada nibh bibendum ut. Sed id arcu lacus. Aliquam varius diam neque, nec feugiat tortor volutpat a. Nulla facilisi.",
  },
  {
    id: 4,
    title: "Как оставить отзыв на Билетопоиск?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus rutrum odio id laoreet. Integer feugiat, ante non fringilla facilisis, nisl nulla interdum mauris, vitae iaculis nunc justo at erat. Sed elementum eros nec velit suscipit, sed fringilla sapien vestibulum. Mauris consectetur, urna eu fermentum finibus, erat elit scelerisque nisl, vel consequat purus diam a arcu. In pharetra tristique sapien, sit amet consectetur nunc euismod eget. Sed sit amet massa ultricies, luctus dui eget, feugiat massa. Proin aliquet, turpis in venenatis gravida, justo nibh tristique sapien, id tincidunt lacus odio et est. Fusce et turpis malesuada, tristique justo a, mattis sem. Phasellus consequat dolor ac tincidunt placerat. Vivamus interdum ante a arcu scelerisque, in fringilla elit pretium. Sed venenatis viverra purus, at malesuada nibh bibendum ut. Sed id arcu lacus. Aliquam varius diam neque, nec feugiat tortor volutpat a. Nulla facilisi.",
  },
];

export default function Questions() {
  const [active, setActive] = useState<number | undefined>();
  return (
    <section className="space">
      <header className={classNames("back", styles.header)}>
        <h1>Вопросы и ответы</h1>
      </header>
      {questions.map((q) => {
        return (
          <Accordion
            key={q.id}
            title={q.title}
            setActive={setActive}
            active={active}
            id={q.id}
          >
            {q.content}
          </Accordion>
        );
      })}
    </section>
  );
}
