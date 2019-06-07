@extends('layouts.app')
@section('content')

<div class="container"><br>

    <div class="card">
        <div class="card-header">
            Création d'un nouveau tag
        </div>

        <div class="card-body">
            <form action="{{ route('tags.store') }}" method="POST">
                {{ csrf_field() }}
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-12">
                            <label for="tag">Tag</label>
                            <input type="text" name="tag" class="form-control {{ $errors->has('tag') ? 'is-invalid' : '' }}" placeholder="Tag" value="{{ old('tag') }}">
                            @if ($errors->has('tag'))
                            <div class="invalid-feedback">{{ $errors->first('tag') }}</div>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="text-center">
                        <button class="btn btn-primary" type="submit">Créer le tag</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div><br>
@endsection