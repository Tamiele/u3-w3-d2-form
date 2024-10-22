import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './registrazione.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrazioneComponent],
  imports: [CommonModule, RegistrazioneRoutingModule, ReactiveFormsModule],
})
export class RegistrazioneModule {}
