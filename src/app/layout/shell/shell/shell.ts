import { Component } from '@angular/core';
import { Header } from '../../header/header/header';
import { Footer } from '../../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ds-shell',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
