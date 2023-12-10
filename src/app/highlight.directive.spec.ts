import { HighlightDirective } from './highlight.directive';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<any>;
  let elementRefMock: jasmine.SpyObj<ElementRef>;
  let rendererMock: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle']);

    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        HighlightDirective,
        { provide: ElementRef, useValue: elementRefMock },
        { provide: Renderer2, useValue: rendererMock },
      ],
    });

    fixture = TestBed.createComponent(TestComponent); // Create a test component to apply the directive
  });

  it('should create an instance', () => {
    const directive = TestBed.inject(HighlightDirective);
    expect(directive).toBeTruthy();
  });

  it('should highlight on mouseover', () => {
    // Arrange
    const directive = TestBed.inject(HighlightDirective);

    // Act
    directive.onMouseOver();

    // Assert
    expect(rendererMock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'background-color',
      'yellow'
    );
  });

  it('should remove highlight on mouseleave', () => {
    // Arrange
    const directive = TestBed.inject(HighlightDirective);

    // Act
    directive.onMouseLeave();

    // Assert
    expect(rendererMock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'background-color',
      null
    );
  });

  it('should highlight on mouseover and remove highlight on mouseleave', () => {
    // Arrange
    const directive = TestBed.inject(HighlightDirective);

    // Act
    directive.onMouseOver();
    directive.onMouseLeave();

    // Assert
    expect(rendererMock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'background-color',
      'yellow'
    );
    expect(rendererMock.setStyle).toHaveBeenCalledWith(
      elementRefMock.nativeElement,
      'background-color',
      null
    );
  });
});

// Test component to apply the directive
@Component({
  template: `<div appHighlight></div>`,
})
class TestComponent {}