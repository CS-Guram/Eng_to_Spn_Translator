from django.http import JsonResponse
from .dictionary.translator_dict import translator_dict
from .dictionary.numbers_dict import numbers_dict

def translate_word(request, word):
    # Replace this with your translation logic
    capitalized_word = word.capitalize()
    
    translation = translator_dict.get(capitalized_word)
    if translation is not None:
        # Word found in the translator_dict
        return JsonResponse({'translation': translation})
    else:
        # Word not found in translator_dict, check numbers_dict
        translation = numbers_dict.get(capitalized_word, f"No translation available, numbers are translated until 100")
        return JsonResponse({'translation': translation})
    
# () The translate_word function is a Django view that handles translation requests.
# () It takes an HTTP request (request) and a word as a parameter.
# () It capitalizes the word to ensure consistent handling.
# () It checks if the word is present in the translator_dict. If yes, it returns the 
#    translation as a JSON response.
# () If the word is not found in the translator_dict, it checks the numbers_dict and 
#    returns a translation or a default message for numbers.