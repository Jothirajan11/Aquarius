import React from 'react';
import { Droplets } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-indigo-900 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Droplets className="h-8 w-8 text-blue-300" />
          <h1 className="text-2xl font-bold">JENKINS</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#overview" className="hover:text-blue-300 transition">Overview</a></li>
            <li><a href="#horoscope" className="hover:text-blue-300 transition">Horoscope</a></li>
            <li><a href="#compatibility" className="hover:text-blue-300 transition">Compatibility</a></li>
            <li><a href="#famous" className="hover:text-blue-300 transition">Famous Aquarians</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
