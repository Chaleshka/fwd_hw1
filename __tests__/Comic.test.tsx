// ComicPage.test.tsx или ComicPage.test.js, в зависимости от расширения файлов
import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicPage, { Comic } from '../app/comic/page';

describe('ComicPage component', () => {
  test('Title element is rendered correctly', async () => {
    render(<ComicPage />);
    const titleElement = screen.getByText('XKCD Comic');
    expect(titleElement).toBeInTheDocument();
  });

  test('Image element has correct src and alt text', async () => {
    render(<ComicPage />);
    const imgElement = screen.getByAltText('Comic Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/comic.jpg'); // Замените на реальный src изображения
  });

//   test('Published date is displayed correctly', async () => {
//     // render(<ComicPage />);
//     const publishedDateElement = screen.getByText(/Published on:/i);
//     expect(publishedDateElement).toBeInTheDocument();
//     // Проверка формата даты и расстояния до текущего момента может быть сложной, зависит от текущей даты.
//     // Например, можно проверить формат даты и наличие строки типа "2 days ago" или "in 2 days".
//   });
});
